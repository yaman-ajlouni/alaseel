// src/store/actions/footerActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

// Fetch footer data from the footerInfo table
export const fetchFooterData = createAsyncThunk('footer/fetchFooterData', async () => {
    const { data, error } = await supabase
        .from('footer') // Your table name in Supabase
        .select('tel, mob, fax, email, poweredBy'); // Columns to retrieve

    if (error) throw new Error(error.message);
    return data[0]; // Assuming there is only one row of footer info
});
