import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: []
    },
    reducers: {
        setCategoryData: (state: any) => {
            state.data = state
        }
    }
});

export const { setCategoryData } = categorySlice.actions;

export default categorySlice.reducer;