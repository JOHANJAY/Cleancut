import { supabase } from '../supabase/client';

export const getUpcomingBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('status', 'pending')
    .order('date', { ascending: true });

  if (error) throw error;
  return data;
};

export const approveBooking = async (id) => {
  const { error } = await supabase
    .from('bookings')
    .update({ status: 'approved' })
    .eq('id', id);

  if (error) throw error;
};

export const cancelBooking = async (id) => {
  const { error } = await supabase
    .from('bookings')
    .update({ status: 'cancelled' })
    .eq('id', id);

  if (error) throw error;
};