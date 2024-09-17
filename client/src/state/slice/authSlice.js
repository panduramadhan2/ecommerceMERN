import { createSlice } from "@reduxjs/toolkit";
import {
  loadUser,
  loginUser,
  logoutUser,
  updateProfile,
  updatePassword,
  uploadAvatar,
} from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isLogout: false,
    authLoading: false,
    message: null,
    error: null,
    user: null,
    isUpdateProfile: false,
    isUpdateProfileLoading: false,
    isUpdateProfileError: false,
    isUpdatePassword: false,
    isUpdatePasswordLoading: false,
    isUpdatePasswordError: false,
    isUploadAvatar: false,
    isUploadAvatarLoading: false,
    isUploadAvatarError: false,
  },
  reducers: {
    authReset: (state) => {
      state.isAuth = false;
      state.isLogout = false;
      state.authLoading = false;
      state.message = null;
      state.error = null;
      state.user = null;
    },
    profileReset: (state) => {
      state.isUpdateProfileLoading = false;
      state.isUpdateProfileError = false;
      state.isUpdateProfile = false;
      state.message = null;
      state.error = null;
    },
    passwordReset: (state) => {
      state.isUpdatePasswordLoading = false;
      state.isUpdatePasswordError = false;
      state.isUpdatePassword = false;
      state.message = null;
      state.error = null;
    },
    avatarReset: (state) => {
      state.isUploadAvatarLoading = false;
      state.isUploadAvatarError = false;
      state.isUploadAvatar = false;
      state.message = null;
      state.error = null;
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
        state.isLogout = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authLoading = false;
        state.isAuth = false;
        state.isLogout = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(loadUser.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isAuth = true;
        state.isLogout = false;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.authLoading = false;
        state.isAuth = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isUpdateProfileLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isUpdateProfileLoading = false;
        state.isUpdateProfile = true;
        state.message = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isUpdateProfileLoading = false;
        state.isUpdateProfile = false;
        state.isUpdateProfileError = true;
        state.error = action.payload;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isUpdatePasswordLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isUpdatePasswordLoading = false;
        state.isUpdatePassword = true;
        state.message = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isUpdatePasswordLoading = false;
        state.isUpdatePassword = false;
        state.isUpdatePasswordError = true;
        state.error = action.payload;
      })
      .addCase(uploadAvatar.pending, (state) => {
        state.isUploadAvatarLoading = true;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.isUploadAvatarLoading = false;
        state.isUploadAvatar = true;
        state.message = action.payload;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.isUploadAvatarLoading = false;
        state.isUploadAvatar = false;
        state.isUploadAvatarError = true;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isAuth = false;
        state.isLogout = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.authLoading = false;
        state.isAuth = true;
        state.isLogout = false;
        state.message = action.payload;
      });
  },
});

export const { authReset, profileReset, passwordReset, avatarReset } =
  authSlice.actions;

export default authSlice.reducer;
