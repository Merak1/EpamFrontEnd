// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// //? Using just Redux
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { customMiddleware } from "middleware/customMiddleware";
// import rootReducer from "./reducers";

// const initialState = {};
// const middleware = [thunk, logger, customMiddleware];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
//   // applyMiddleware(...middleware)
// );
// export default store;

//? Using Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import authReducer from "./Helpers/Auth/AuthSlice";
import appointmentReducer from "./Helpers/Appointment/appointmentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentReducer,
    user: userReducer,

    // Define a top-level state field named `todos`, handled by `todosReducer`
  },
});
