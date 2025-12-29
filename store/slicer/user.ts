import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadUserFromStorage = createAsyncThunk<any>(
  "auth/loadUserFromStorage",
  async () => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("user");

    if (!storedUser) return null;

    return JSON.parse(storedUser) as User;
  }
);

interface State {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  allUsers: User[] | [];
}

const initialState: State = {
  isLoggedIn: false,
  user: null,
  token: null,
  allUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequestSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    userLogOut(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    getAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    deleteUser(state, action) {
      state.allUsers = state.allUsers.filter((u) => u._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUserFromStorage.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    });
  },
});

export const { userRequestSuccess } = userSlice.actions;
export default userSlice.reducer;
