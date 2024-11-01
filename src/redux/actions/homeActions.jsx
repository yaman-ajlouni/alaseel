import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

// Fetch images from the home table
export const fetchHomeData = createAsyncThunk('home/fetchHomeData', async () => {
  const { data, error } = await supabase.from('home').select('*');
  if (error) throw new Error(error.message);
  return data; // Return data from Supabase response
});
