import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    }
  }
});

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;
