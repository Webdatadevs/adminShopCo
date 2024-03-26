import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoadingCategories: false,
    categories: [],
};


export const CategoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setIsLoadingCategories(state) {
            state.isLoadingCategories = true;
        },
        setCategories(state, action) {
            state.isLoadingCategories = false;
            state.categories = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCategories, setIsLoadingCategories } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
