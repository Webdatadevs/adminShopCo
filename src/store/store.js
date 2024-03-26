import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../slice/ProductSlice'
import CategoriesSlice from '../slice/CategoriesSlice'

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    categories: CategoriesSlice,
  },
})