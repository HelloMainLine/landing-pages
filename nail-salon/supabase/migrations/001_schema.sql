-- 001_schema.sql: Complete PostgreSQL schema for Nail Salon Management
-- Uses gen_random_uuid() for PKs, enum types, updated_at triggers

-- ============================================================
-- ENUM TYPES
-- ============================================================
CREATE TYPE user_role AS ENUM ('admin', 'staff', 'client');
CREATE TYPE appointment_status AS ENUM ('scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show');
CREATE TYPE payment_method AS ENUM ('CASH', 'CARD', 'APPLE_PAY', 'VENMO');
CREATE TYPE loyalty_tier AS ENUM ('BRONZE', 'SILVER', 'GOLD', 'PLATINUM');

-- ============================================================
-- PROFILES
-- ============================================================
CREATE TABLE profiles (
    id          uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email       text NOT NULL,
    full_name   text NOT NULL,
    role        user_role NOT NULL DEFAULT 'client',
    phone       text,
    avatar_url  text,
    created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_email ON profiles(email);

-- ============================================================
-- SERVICES
-- ============================================================
CREATE TABLE services (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name            text NOT NULL,
    description     text,
    duration_minutes int NOT NULL,
    price_cents     int NOT NULL,
    category        text,
    is_active       boolean NOT NULL DEFAULT true,
    sort_order      int NOT NULL DEFAULT 0,
    created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_services_active ON services(is_active, sort_order);
CREATE INDEX idx_services_category ON services(category);

-- ============================================================
-- STAFF
-- ============================================================
CREATE TABLE staff (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id  uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    bio         text,
    specialties text[],
    is_active   boolean NOT NULL DEFAULT true,
    created_at  timestamptz NOT NULL DEFAULT now(),
    UNIQUE(profile_id)
);

CREATE INDEX idx_staff_active ON staff(is_active);

-- ============================================================
-- STAFF AVAILABILITY
-- ============================================================
CREATE TABLE staff_availability (
    id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    staff_id      uuid NOT NULL REFERENCES staff(id) ON DELETE CASCADE,
    day_of_week   int NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
    start_time    time NOT NULL,
    end_time      time NOT NULL CHECK (end_time > start_time),
    is_recurring  boolean NOT NULL DEFAULT true
);

CREATE INDEX idx_staff_availability_staff ON staff_availability(staff_id);
CREATE INDEX idx_staff_availability_day ON staff_availability(day_of_week);

-- ============================================================
-- APPOINTMENTS
-- ============================================================
CREATE TABLE appointments (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id   uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    staff_id    uuid NOT NULL REFERENCES staff(id) ON DELETE CASCADE,
    service_id  uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
    start_time  timestamptz NOT NULL,
    end_time    timestamptz NOT NULL CHECK (end_time > start_time),
    status      appointment_status NOT NULL DEFAULT 'scheduled',
    notes       text,
    created_at  timestamptz NOT NULL DEFAULT now(),
    updated_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_appointments_client ON appointments(client_id);
CREATE INDEX idx_appointments_staff ON appointments(staff_id);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_start ON appointments(start_time);
CREATE INDEX idx_appointments_date ON appointments((start_time::date));

-- ============================================================
-- PRODUCTS
-- ============================================================
CREATE TABLE products (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name            text NOT NULL,
    description     text,
    category        text,
    quantity_on_hand int NOT NULL DEFAULT 0,
    reorder_point   int NOT NULL DEFAULT 10,
    unit_price_cents int NOT NULL DEFAULT 0,
    supplier        text,
    created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_low_stock ON products(quantity_on_hand) WHERE quantity_on_hand <= reorder_point;

-- ============================================================
-- INVENTORY TRANSACTIONS
-- ============================================================
CREATE TABLE inventory_transactions (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id      uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    quantity_change int NOT NULL,
    reason          text,
    created_by      uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_inventory_transactions_product ON inventory_transactions(product_id);
CREATE INDEX idx_inventory_transactions_created ON inventory_transactions(created_at);

-- ============================================================
-- PAYMENTS
-- ============================================================
CREATE TABLE payments (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    appointment_id  uuid NOT NULL REFERENCES appointments(id) ON DELETE CASCADE,
    amount_cents    int NOT NULL CHECK (amount_cents > 0),
    method          payment_method NOT NULL,
    tip_cents       int NOT NULL DEFAULT 0 CHECK (tip_cents >= 0),
    processed_by    uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_payments_appointment ON payments(appointment_id);
CREATE INDEX idx_payments_processed_by ON payments(processed_by);

-- ============================================================
-- LOYALTY POINTS
-- ============================================================
CREATE TABLE loyalty_points (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id       uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    points_earned   int NOT NULL DEFAULT 0,
    points_redeemed int NOT NULL DEFAULT 0,
    last_visit      timestamptz,
    tier            loyalty_tier NOT NULL DEFAULT 'BRONZE',
    UNIQUE(client_id)
);

CREATE INDEX idx_loyalty_points_tier ON loyalty_points(tier);

-- ============================================================
-- REVIEWS
-- ============================================================
CREATE TABLE reviews (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id       uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    appointment_id  uuid NOT NULL REFERENCES appointments(id) ON DELETE CASCADE,
    rating          int NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment         text,
    is_featured     boolean NOT NULL DEFAULT false,
    created_at      timestamptz NOT NULL DEFAULT now(),
    UNIQUE(appointment_id)
);

CREATE INDEX idx_reviews_client ON reviews(client_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_featured ON reviews(is_featured) WHERE is_featured = true;

-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================
CREATE OR REPLACE FUNCTION trigger_set_updated_at()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_appointments_updated_at
    BEFORE UPDATE ON appointments
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_updated_at();
