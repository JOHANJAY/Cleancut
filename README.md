# CleanCut - Modern Barbershop Website

A professional barbershop website built with React and Vite, featuring a clean design with smooth animations and full Supabase integration for booking management.

## Features

- Modern, responsive design with a black, white, and red color scheme
- Smooth page transitions and micro-interactions
- Complete booking system with Supabase integration
- Five main pages: Home, About, Services, Booking, and Contact

## Tech Stack

- React 18
- Vite
- React Router for navigation
- Framer Motion for animations
- React Hook Form for form management
- Tailwind CSS for styling
- Supabase for backend and booking management

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install the dependencies:
   ```
   npm install
   ```
3. Copy the `.env.example` file to `.env` and update with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

### Development

```
npm run dev
```

### Build for Production

```
npm run build
```

## Supabase Setup Instructions

### 1. Create a Supabase Project

1. Go to [https://supabase.com/](https://supabase.com/) and sign up for an account
2. Click "New Project" and fill in your project details
3. Choose a strong database password and save it securely
4. Click "Create new project"

### 2. Get Your API Keys

1. In your Supabase project dashboard, go to Settings > API
2. Copy the "URL" and "anon/public" key
3. Paste these values in your `.env` file:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

### 3. Create the Bookings Table

1. Go to SQL Editor in your Supabase project
2. Run the SQL migration found in `supabase/migrations/create_bookings_table.sql`

Alternatively:

1. Go to Table Editor
2. Click "Create a new table"
3. Name the table "bookings"
4. Add the following columns:
   - id (uuid, primary key, default: gen_random_uuid())
   - created_at (timestamptz, default: now())
   - name (text, not null)
   - email (text, not null)
   - phone (text, not null)
   - date (date, not null)
   - time (text, not null)
   - service (text, not null)
   - barber (text)
   - notes (text)
5. Enable Row Level Security (RLS) by clicking "Enable RLS"
6. Create the necessary policies:
   - One for allowing anonymous users to insert bookings
   - One for allowing authenticated users to view their own bookings
   - One for admins to manage all bookings

### 4. Testing the Integration

After setting up Supabase and updating your environment variables, test the booking form to ensure data is being properly stored in your Supabase database.

## License

This project is licensed under the MIT License.