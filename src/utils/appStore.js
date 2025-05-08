import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const appStore = configureStore({
  reducer: {
    user: userReducer,
    
    
    // request: requestReducer,
  },
});

export default appStore;
