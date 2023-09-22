import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import postSlice from "./postSlice/postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    post:postSlice
  },
});
