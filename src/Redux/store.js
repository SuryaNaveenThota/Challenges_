import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";


const store = configureStore({
    reducer: {
      apiData : apiReducer,
    },
  });
  
  export default store;