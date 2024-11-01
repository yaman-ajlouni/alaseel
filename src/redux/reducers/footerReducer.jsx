// src/store/slices/footerSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchFooterData } from '../actions/footerActions';

const footerSlice = createSlice({
    name: 'footer',
    initialState: {
        tel: '',
        mob: '',
        fax: '',
        email: '',
        poweredBy: '',
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFooterData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFooterData.fulfilled, (state, action) => {
                state.loading = false;
                state.tel = action.payload.tel;
                state.mob = action.payload.mob;
                state.fax = action.payload.fax;
                state.email = action.payload.email;
                state.poweredBy = action.payload.poweredBy;
            })
            .addCase(fetchFooterData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectFooterData = (state) => state.footer;
export default footerSlice.reducer;
