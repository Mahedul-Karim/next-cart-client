import { combineReducers } from "@reduxjs/toolkit";
import user from "../slicer/user";
import cart from "../slicer/cart";
import wishlist from "../slicer/wishlist";

export const rootReducer = combineReducers({
  user,
  cart,
  wishlist
});
