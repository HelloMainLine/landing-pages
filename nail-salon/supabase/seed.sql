-- seed.sql: Sample data for Nail Salon Management System
-- Requires 001_schema.sql and 002_rls.sql to be applied first.
-- Uses gen_random_uuid() for UUIDs.
-- NOTE: auth.users must exist before inserting into profiles.
-- In a real environment, create auth users first, then match IDs.
-- For local/dev seeding, we insert directly with placeholder UUIDs.

-- ============================================================
-- ADMIN PROFILES
-- ============================================================
INSERT INTO profiles (id, email, full_name, role, phone) VALUES
    ('00000000-0000-0000-0000-000000000001', 'admin@nailsalon.com',   'Sophia Chen',      'admin', '+1-555-0100'),
    ('00000000-0000-0000-0000-000000000002', 'manager@nailsalon.com', 'Marcus Johnson',    'admin', '+1-555-0101');

-- ============================================================
-- STAFF PROFILES (role = staff)
-- ============================================================
INSERT INTO profiles (id, email, full_name, role, phone) VALUES
    ('00000000-0000-0000-0000-000000000010', 'lily.nguyen@nailsalon.com',  'Lily Nguyen',    'staff', '+1-555-0102'),
    ('00000000-0000-0000-0000-000000000011', 'priya.sharma@nailsalon.com', 'Priya Sharma',    'staff', '+1-555-0103'),
    ('00000000-0000-0000-0000-000000000012', 'carlos.garcia@nailsalon.com','Carlos Garcia',   'staff', '+1-555-0104');

-- ============================================================
-- STAFF DETAILS
-- ============================================================
INSERT INTO staff (id, profile_id, bio, specialties) VALUES
    (
        '00000000-0000-0000-0000-000000000020',
        '00000000-0000-0000-0000-000000000010',
        'Lily is a senior nail artist with 8+ years of experience specializing in intricate gel art and 3D acrylic designs.',
        ARRAY['Gel Art', '3D Acrylic', 'Nail Sculpting', 'French Tips']
    ),
    (
        '00000000-0000-0000-0000-000000000021',
        '00000000-0000-0000-0000-000000000011',
        'Priya brings her signature floral and mandala hand-painted designs, trained in traditional Indian nail artistry.',
        ARRAY['Hand-painted Art', 'Floral Designs', 'Mandala', 'Bridal']
    ),
    (
        '00000000-0000-0000-0000-000000000022',
        '00000000-0000-0000-0000-000000000012',
        'Carlos specializes in precision manicures, nail health, and modern minimalist styles with a focus on men''s grooming.',
        ARRAY['Precision Manicure', 'Nail Health', 'Minimalist', 'Men''s Grooming']
    );

-- ============================================================
-- STAFF AVAILABILITY (Mon-Sat, recurring)
-- ============================================================
INSERT INTO staff_availability (staff_id, day_of_week, start_time, end_time, is_recurring) VALUES
    -- Lily: Mon-Sat 9am-6pm
    ('00000000-0000-0000-0000-000000000020', 1, '09:00', '18:00', true),
    ('00000000-0000-0000-0000-000000000020', 2, '09:00', '18:00', true),
    ('00000000-0000-0000-0000-000000000020', 3, '09:00', '18:00', true),
    ('00000000-0000-0000-0000-000000000020', 4, '09:00', '18:00', true),
    ('00000000-0000-0000-0000-000000000020', 5, '09:00', '18:00', true),
    ('00000000-0000-0000-0000-000000000020', 6, '10:00', '16:00', true),
    -- Priya: Tue-Sat 10am-7pm
    ('00000000-0000-0000-0000-000000000021', 2, '10:00', '19:00', true),
    ('00000000-0000-0000-0000-000000000021', 3, '10:00', '19:00', true),
    ('00000000-0000-0000-0000-000000000021', 4, '10:00', '19:00', true),
    ('00000000-0000-0000-0000-000000000021', 5, '10:00', '19:00', true),
    ('00000000-0000-0000-0000-000000000021', 6, '10:00', '17:00', true),
    -- Carlos: Mon-Fri 11am-8pm
    ('00000000-0000-0000-0000-000000000022', 1, '11:00', '20:00', true),
    ('00000000-0000-0000-0000-000000000022', 2, '11:00', '20:00', true),
    ('00000000-0000-0000-0000-000000000022', 3, '11:00', '20:00', true),
    ('00000000-0000-0000-0000-000000000022', 4, '11:00', '20:00', true),
    ('00000000-0000-0000-0000-000000000022', 5, '11:00', '20:00', true);

-- ============================================================
-- SAMPLE CLIENT PROFILE
-- ============================================================
INSERT INTO profiles (id, email, full_name, role, phone) VALUES
    ('00000000-0000-0000-0000-000000000030', 'emma.davis@example.com', 'Emma Davis', 'client', '+1-555-0200');

-- ============================================================
-- SERVICES (8 nail services)
-- ============================================================
INSERT INTO services (id, name, description, duration_minutes, price_cents, category, sort_order) VALUES
    ('00000000-0000-0000-0000-000000000100', 'Classic Manicure',
     'Nail shaping, cuticle care, hand massage, and polish application.', 30, 2500, 'Manicure', 1),
    ('00000000-0000-0000-0000-000000000101', 'Gel Manicure',
     'Long-lasting gel polish with full cuticle care and shaping.', 45, 4000, 'Manicure', 2),
    ('00000000-0000-0000-0000-000000000102', 'Classic Pedicure',
     'Foot soak, nail care, callus removal, massage, and polish.', 45, 3500, 'Pedicure', 3),
    ('00000000-0000-0000-0000-000000000103', 'Spa Pedicure',
     'Deluxe pedicure with exfoliating scrub, hydrating mask, and hot towel wrap.', 60, 5500, 'Pedicure', 4),
    ('00000000-0000-0000-0000-000000000104', 'Acrylic Full Set',
     'Full set of acrylic nails with your choice of shape and length.', 75, 5500, 'Acrylic', 5),
    ('00000000-0000-0000-0000-000000000105', 'Acrylic Fill',
     'Acrylic fill-in for existing acrylic nails.', 60, 4000, 'Acrylic', 6),
    ('00000000-0000-0000-0000-000000000106', 'Dip Powder',
     'Dip powder application with vibrant, chip-resistant color.', 50, 4500, 'Dip Powder', 7),
    ('00000000-0000-0000-0000-000000000107', 'Nail Art Add-On',
     'Custom nail art design added to any service — includes 2 accent nails.', 30, 1500, 'Nail Art', 8);

-- ============================================================
-- SAMPLE PRODUCTS
-- ============================================================
INSERT INTO products (id, name, description, category, quantity_on_hand, reorder_point, unit_price_cents, supplier) VALUES
    ('00000000-0000-0000-0000-000000000200', 'OPI Nail Lacquer - Bubble Bath',       'Sheer pink, classic natural look',            'Polish',        8,  5,  350, 'OPI Beauty Supply'),
    ('00000000-0000-0000-0000-000000000201', 'OPI Nail Lacquer - Big Apple Red',     'Classic bright red',                           'Polish',        12, 5,  350, 'OPI Beauty Supply'),
    ('00000000-0000-0000-0000-000000000202', 'CND Shellac - Midnight Swim',          'Deep navy gel polish',                         'Gel Polish',    6,  3,  1200,'CND Direct'),
    ('00000000-0000-0000-0000-000000000203', 'CND Shellac - Wildfire',               'Bright coral gel polish',                      'Gel Polish',    9,  3,  1200,'CND Direct'),
    ('00000000-0000-0000-0000-000000000204', 'Mia Secret Liquid Monomer',             'Professional acrylic liquid, 8oz',             'Acrylic',       3,  2,  1800,'Mia Secret'),
    ('00000000-0000-0000-0000-000000000205', 'Mia Secret Acrylic Powder - Clear',    'Clear acrylic powder for encapsulation',        'Acrylic',       5,  2,  1400,'Mia Secret'),
    ('00000000-0000-0000-0000-000000000206', 'Cuticle Oil - Lavender 2oz',           'Moisturizing lavender cuticle oil',             'Nail Care',     15, 10, 800, 'Hand & Nail Co.'),
    ('00000000-0000-0000-0000-000000000207', 'Nail File Pack (100ct)',               'Double-sided 180/240 grit files',              'Supplies',      25, 20, 400, 'SalonPro Supply'),
    ('00000000-0000-0000-0000-000000000208', 'Disposable Toe Separators (500ct)',    'Foam toe separators for pedicures',            'Supplies',      50, 30, 600, 'SalonPro Supply'),
    ('00000000-0000-0000-0000-000000000209', 'UV/LED Nail Lamp - SunUV',             '48W professional lamp, auto sensor',           'Equipment',     2,  1,  5500,'SunUV Inc.');

-- ============================================================
-- SAMPLE LOYALTY POINTS (for the client)
-- ============================================================
INSERT INTO loyalty_points (client_id, points_earned, points_redeemed, last_visit, tier) VALUES
    ('00000000-0000-0000-0000-000000000030', 350, 100, now() - interval '3 days', 'SILVER');
