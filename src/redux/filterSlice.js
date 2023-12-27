import { createSlice } from "@reduxjs/toolkit";
// redux persist locale storage
const filterInitialState = '';
export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            return state = action.payload;
        }
    }
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
//selector
export const selectFilter = (state) => state.filter;