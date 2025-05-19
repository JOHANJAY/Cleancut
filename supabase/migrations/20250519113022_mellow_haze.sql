/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `date` (date)
      - `time` (text)
      - `service` (text)
      - `barber` (text)
      - `notes` (text)
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for authenticated users to manage their own bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  service text NOT NULL,
  barber text,
  notes text
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy to allow insert for all users (for booking form)
CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy to allow authenticated users to view their own bookings
CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (email = auth.email());

-- Policy to allow admins to view all bookings
CREATE POLICY "Admins can view all bookings"
  ON bookings
  FOR ALL
  TO service_role
  USING (true);