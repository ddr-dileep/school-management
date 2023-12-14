import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/axiosConfigs";

const authApiServices = {
  // register a new api service
  register: createAsyncThunk(
    "/auth/register",
    async (data, { rejectWithValue }) => {
      try {
        const response = await API.post("/auth/register", data);
        return response.data;
      } catch (error) {
        return rejectWithValue({
          error: error?.response?.data,
        });
      }
    }
  ),

  // login a new api service
  login: createAsyncThunk("/auth/login", async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/login", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue({
        error: error?.response?.data,
      });
    }
  }),
};

export default authApiServices;
