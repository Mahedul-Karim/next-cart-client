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

export const checkoutReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    case "ADDRESS1":
      return {
        ...state,
        address1: action.payload,
      };
    case "ADDRESS2":
      return {
        ...state,
        address2: action.payload,
      };
    case "ZIPCODE":
      return {
        ...state,
        zipCode: action.payload,
      };
    case "COUPON_CODE":
      return {
        ...state,
        couponCode: action.payload,
      };
    case "COUPON_CODE_DATA":
      return {
        ...state,
        couponCodeData: action.payload,
      };
    case "DISCOUNT_PRICE":
      return {
        ...state,
        discountPrice: action.payload,
      };
    default:
      return state;
  }
};

type FormState = {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarPreview?: string;
  isLoading?:boolean;
};

export const formReducer = function (
  state: FormState,
  action: { type: string; field: string; payload: string | boolean }
) {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "CLEAR_FORM":
      return {
        name: "",
        email: "",
        password: "",
        avatar: "",
        avatarPreview: "",
      };
    default:
      return state;
  }
};
