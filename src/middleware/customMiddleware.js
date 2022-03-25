export const customMiddleware = (store) => (next) => (action) => {
  console.log("🔻from custom middleware, storeState.useReducer() 🔻");
  console.log(store.getState().userReducer);

  console.log("acá se debería checar si se está loggeado");

  next(action);
};
