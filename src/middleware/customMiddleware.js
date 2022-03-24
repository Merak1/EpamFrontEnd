export const customMiddleware = (store) => (next) => (action) => {
  console.log(store.getState().userReducer);
  console.log("aa custom middleware");
  next(action);
};
