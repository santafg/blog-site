import { combineReducers } from "@reduxjs/toolkit";
import blogSlice from "../slices/blogSlice";

const rootReducer = combineReducers({
  blogSlice: blogSlice,
});

export default rootReducer;
