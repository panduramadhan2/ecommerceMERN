import { createSlice } from "@reduxjs/toolkit";
import { loadUser, loginUser } from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    authLoading: false,
    error: null,
    user: null,
  },
  reducers: {
    authReset: (state) => {
      state.isAuth = false;
      state.authLoading = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authLoading = false;
        state.isAuth = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { authReset } = authSlice.actions;

export default authSlice.reducer;
