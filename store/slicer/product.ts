import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  product: Product[];
  stripe: string;
} = {
  product: [],
  stripe: "",
};

const productSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    productRequestSuccess(state, action) {
      state.product.push(action.payload);
    },
    allProducts(state, action) {
      state.product = action.payload;
    },
    deleteProducts(state, action) {
      state.product = state.product.filter((p) => p._id !== action.payload);
    },
    updateProductReview(state, action) {
      const item = action.payload;

      const existingItemIndex = state.product.findIndex(
        (e) => e._id === item._id
      );

      state.product[existingItemIndex] = item;
    },
    setApi(state, action) {
      state.stripe = action.payload;
    },
  },
});

export const {
  productRequestSuccess,
  allProducts,
  deleteProducts,
  updateProductReview,
  setApi,
} = productSlice.actions;
export default productSlice.reducer;
