import { createSlice } from "@reduxjs/toolkit";

const wishlistItem =
  (typeof window !== "undefined" && localStorage.getItem("wishlistItems"))
    ? JSON.parse(localStorage.getItem("wishlistItems")!)
    : [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: wishlistItem,
  },
  reducers: {
    addTowishlist(state, action) {
      const item = action.payload;

      const existingItemIndex = state.wishlist.findIndex(
        (c: any) => c._id === item._id
      );

      const existingItem = state.wishlist[existingItemIndex];

      if (existingItem) {
        return;
      } else {
        state.wishlist.push(item);
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
      }
    },
    removewishlistItem(state, action) {
      const itemId = action.payload;

      state.wishlist = state.wishlist.filter((c: any) => c._id !== itemId);
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    },
    allwishList(state, action) {},
  },
});

export const { addTowishlist, removewishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
