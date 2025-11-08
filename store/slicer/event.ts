import { createSlice } from "@reduxjs/toolkit";

const initialState: { event: EventType[] } = {
  event: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventRequestSuccess(state, action) {
      state.event.push(action.payload);
    },
    allevents(state, action) {
      state.event = action.payload;
    },
    deleteEvents(state, action) {
      state.event = state.event.filter((e) => e._id !== action.payload);
    },
  },
});

export const { eventRequestSuccess, allevents, deleteEvents } =
  eventSlice.actions;
export default eventSlice.reducer;
