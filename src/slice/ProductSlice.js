import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    products: [],
};

export const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setIsLoading(state) {
            state.isLoading = true;
        },
        setProducts(state, action) {
            state.isLoading = false;
            state.products = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setProducts, setIsLoading } = ProductsSlice.actions;

export default ProductsSlice.reducer;
