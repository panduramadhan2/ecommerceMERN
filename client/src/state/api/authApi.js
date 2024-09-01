import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const { data } = await axios.post("/user/login", userData, config);

      return data.user;
    } catch (error) {
      console.log(error);

      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/user/profile", config);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "/user/logout",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.post("/user/logout", config);
      return data.message;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
