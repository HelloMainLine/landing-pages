-- 002_rls.sql: Row Level Security policies for Nail Salon Management
-- Enables RLS on all tables, defines is_admin() helper, and per-table policies

CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
    RETURN EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin');
END;
$$;

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE loyalty_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- PROFILES: self-read + admin-all; self-update (no role change)
CREATE POLICY "profiles_self_select" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_admin_select" ON profiles FOR SELECT USING (is_admin());
CREATE POLICY "profiles_self_update" ON profiles FOR UPDATE USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id AND role IS NOT DISTINCT FROM (SELECT role FROM profiles WHERE id = auth.uid()));
CREATE POLICY "profiles_admin_insert" ON profiles FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "profiles_admin_delete" ON profiles FOR DELETE USING (is_admin());

-- SERVICES: public read (active), admin write
CREATE POLICY "services_public_select" ON services FOR SELECT USING (is_active = true OR is_admin());
CREATE POLICY "services_admin_insert" ON services FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "services_admin_update" ON services FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "services_admin_delete" ON services FOR DELETE USING (is_admin());

-- STAFF: public read (active), admin write
CREATE POLICY "staff_public_select" ON staff FOR SELECT USING (is_active = true OR is_admin());
CREATE POLICY "staff_admin_insert" ON staff FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "staff_admin_update" ON staff FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "staff_admin_delete" ON staff FOR DELETE USING (is_admin());

-- STAFF AVAILABILITY: public read, staff manage own, admin all
CREATE POLICY "sched_public_select" ON staff_availability FOR SELECT USING (true);
CREATE POLICY "sched_staff_insert" ON staff_availability FOR INSERT WITH CHECK
    (EXISTS (SELECT 1 FROM staff WHERE id = staff_id AND profile_id = auth.uid()) OR is_admin());
CREATE POLICY "sched_staff_update" ON staff_availability FOR UPDATE USING
    (EXISTS (SELECT 1 FROM staff WHERE id = staff_id AND profile_id = auth.uid()) OR is_admin());
CREATE POLICY "sched_staff_delete" ON staff_availability FOR DELETE USING
    (EXISTS (SELECT 1 FROM staff WHERE id = staff_id AND profile_id = auth.uid()) OR is_admin());

-- APPOINTMENTS: client own, staff assigned, admin all; client create; staff update
CREATE POLICY "appt_client_select" ON appointments FOR SELECT USING (client_id = auth.uid());
CREATE POLICY "appt_staff_select" ON appointments FOR SELECT USING
    (EXISTS (SELECT 1 FROM staff WHERE id = appointments.staff_id AND profile_id = auth.uid()) OR is_admin());
CREATE POLICY "appt_client_insert" ON appointments FOR INSERT WITH CHECK (client_id = auth.uid());
CREATE POLICY "appt_staff_update" ON appointments FOR UPDATE USING
    (EXISTS (SELECT 1 FROM staff WHERE id = appointments.staff_id AND profile_id = auth.uid()) OR is_admin());
CREATE POLICY "appt_admin_delete" ON appointments FOR DELETE USING (is_admin());

-- PRODUCTS: anyone read, admin write
CREATE POLICY "products_public_select" ON products FOR SELECT USING (true);
CREATE POLICY "products_admin_insert" ON products FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "products_admin_update" ON products FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "products_admin_delete" ON products FOR DELETE USING (is_admin());

-- INVENTORY TRANSACTIONS: anyone read, admin insert
CREATE POLICY "inv_public_select" ON inventory_transactions FOR SELECT USING (true);
CREATE POLICY "inv_admin_insert" ON inventory_transactions FOR INSERT WITH CHECK (is_admin());

-- PAYMENTS: admin all, staff see own processed
CREATE POLICY "pay_admin_select" ON payments FOR SELECT USING (is_admin());
CREATE POLICY "pay_staff_select" ON payments FOR SELECT USING (processed_by = auth.uid());
CREATE POLICY "pay_admin_insert" ON payments FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "pay_admin_update" ON payments FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());

-- LOYALTY POINTS: client own, admin all, admin write
CREATE POLICY "loyalty_client_select" ON loyalty_points FOR SELECT USING (client_id = auth.uid());
CREATE POLICY "loyalty_admin_select" ON loyalty_points FOR SELECT USING (is_admin());
CREATE POLICY "loyalty_admin_insert" ON loyalty_points FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "loyalty_admin_update" ON loyalty_points FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());

-- REVIEWS: public read featured, auth client insert own, admin manage
CREATE POLICY "reviews_public_select" ON reviews FOR SELECT USING (is_featured = true OR is_admin());
CREATE POLICY "reviews_client_insert" ON reviews FOR INSERT WITH CHECK
    (auth.role() = 'authenticated' AND client_id = auth.uid());
CREATE POLICY "reviews_admin_update" ON reviews FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "reviews_admin_delete" ON reviews FOR DELETE USING (is_admin());
