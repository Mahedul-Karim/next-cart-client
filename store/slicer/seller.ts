import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  isSellerLoggedIn: boolean;
  seller: Shop | null;
  sellerToken: string | null;
  adminSeller: Shop[];
} = {
  isSellerLoggedIn: false,
  seller: null,
  sellerToken: null,
  adminSeller: [],
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    sellerRequestSuccess(state, action) {
      state.seller = action.payload.seller;
      state.sellerToken = action.payload.sellerToken;
      state.isSellerLoggedIn = true;
    },
    sellerLogOut(state) {
      state.seller = null;
      state.sellerToken = null;
      state.isSellerLoggedIn = false;
    },
    getAllSeller(state, action) {
      state.adminSeller = action.payload;
    },
  },
});

export const { sellerRequestSuccess, sellerLogOut, getAllSeller } =
  sellerSlice.actions;
export default sellerSlice.reducer;
