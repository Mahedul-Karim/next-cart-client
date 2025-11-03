import { createSlice } from "@reduxjs/toolkit";

const cartItem =
  (typeof window !== "undefined" && localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartItem,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existingItemIndex = state.cart.findIndex(
        (c: any) => c._id === item._id
      );

      const existingItem = state.cart[existingItemIndex];

      if (existingItem) {
        state.cart[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity,
        };

        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      } else {
        state.cart.push(item);
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      }
    },
    allCart(state, action) {
      state.cart = action.payload;
    },
    removeCartQuantity(state, action) {
      const item = action.payload;

      const existingItemIndex = state.cart.findIndex(
        (c: any) => c._id === item._id
      );

      const existingItem = state.cart[existingItemIndex];

      if (existingItem) {
        state.cart[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - item.quantity,
        };

        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      }
    },
    removeCartItem(state, action) {
      const itemId = action.payload;

      state.cart = state.cart.filter((c: any) => c._id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  allCart,
  removeCartQuantity,
  removeCartItem,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
