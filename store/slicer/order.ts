import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  orders: Order[];
  adminOrders: Order[];
} = {
  orders: [],
  adminOrders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderRequestSuccess(state, action) {
      state.orders = action.payload;
    },
    updateOrder(state, action) {
      const order = action.payload;

      const existingOrderIndex = state.orders.findIndex(
        (o) => o._id === order._id
      );

      state.orders[existingOrderIndex] = order;
    },
    getAllOrders(state, action) {
      state.adminOrders = action.payload;
    },
  },
});

export const { orderRequestSuccess, updateOrder, getAllOrders } =
  orderSlice.actions;
export default orderSlice.reducer;
