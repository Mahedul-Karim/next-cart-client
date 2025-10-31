import { createSlice } from "@reduxjs/toolkit";

interface State {
  isLoggedIn: boolean;
  error: any;
  user: User | null;
  token: string | null;
  isLoading: boolean;
  allUsers: User[] | [];
}

const initialState: State = {
  isLoggedIn: false,
  error: null,
  user: null,
  token: null,
  isLoading: false,
  allUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequest(state) {
      state.isLoading = true;
    },
    userRequestSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    userRequestFailed(state) {
      state.isLoading = false;
    },
    clearError(state) {
      state.error = null;
    },
    userLogOut(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    getAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    deleteUser(state, action) {
      state.allUsers = state.allUsers.filter((u) => u._id !== action.payload);
    },
  },
});

export const { userRequest } = userSlice.actions;
export default userSlice.reducer;
