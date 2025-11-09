import { combineReducers } from "@reduxjs/toolkit";
import user from "../slicer/user";
import cart from "../slicer/cart";
import wishlist from "../slicer/wishlist";
import event from "../slicer/event";
import order from "../slicer/order";
import product from "../slicer/product";
import seller from "../slicer/seller";
import toast from "../slicer/toast";

export const rootReducer = combineReducers({
  auth: user,
  cart,
  wishlist,
  event,
  order,
  product,
  seller,
  toast,
});
