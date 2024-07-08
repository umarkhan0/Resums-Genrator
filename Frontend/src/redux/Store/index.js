import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "../Features/auth/SignUp/Slice";
export const store = configureStore({
  reducer: {
   signUp: signUpReducer,
  },
});
