import { combineReducers } from "redux";

import userReducer from "./userReducer";
import authReducer from "../Helpers/Auth/AuthService";
export default combineReducers({
  userReducer: userReducer,
  //   authReducer: authReducer,
  // authReducer,
  // reducer: {
  //   auth: authReducer,
  // },
});
