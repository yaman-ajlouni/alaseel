import { createSlice } from '@reduxjs/toolkit';
import { fetchCateringData } from '../actions/cateringActions';

const cateringSlice = createSlice({
    name: 'catering',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCateringData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCateringData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Update the data state with fetched images
            })
            .addCase(fetchCateringData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Store the error message
            });
    },
});

export const selectCateringData = (state) => state.catering;
export default cateringSlice.reducer;
