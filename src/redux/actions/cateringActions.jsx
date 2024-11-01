import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient'; // Make sure you have a file exporting the Supabase client

// Fetch images from the catering table
export const fetchCateringData = createAsyncThunk('catering/fetchCateringData', async () => {
    const { data, error } = await supabase
        .from('catering') // Ensure this matches your table name
        .select('image_url'); // Adjust the column name as necessary

    if (error) throw new Error(error.message);
    return data; // Return the data from Supabase response
});
