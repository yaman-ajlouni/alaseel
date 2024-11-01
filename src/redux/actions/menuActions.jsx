// src/redux/actions/menuActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

// Fetch images from the menu table
export const fetchMenuData = createAsyncThunk('menu/fetchMenuData', async () => {
  const { data, error } = await supabase.from('menu').select('*');
  if (error) throw new Error(error.message);
  return data; // Return data from Supabase response
});
