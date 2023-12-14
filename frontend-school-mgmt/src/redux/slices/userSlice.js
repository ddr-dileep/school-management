import { createSlice } from "@reduxjs/toolkit";
import authApiServices from "../services/authServices";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  user: {},
  extraReducers(builder) {
    builder
      // register the user
      .addCase(authApiServices.register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authApiServices.register.fulfilled, (state, action) => {
        console.log("register slices registered ", state, action);
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(authApiServices.register.rejected, (state, action) => {
        console.log("register slices registered ", action);
        state.status = "none";
        state.error = action?.payload?.error;
      });
  },
});

export default userSlice.reducer;
