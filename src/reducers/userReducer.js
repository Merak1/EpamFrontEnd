import {
  CREATE_USER,
  RETRIEVE_USERS,
  UPDATE_USER,
  DELETE_USER,
  DELETE_ALL_USERS,
} from "../actions/types";

const initialState = [];

function userReducer(users = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    //? POST
    case CREATE_USER:
      return [...users, payload];
    //? GET
    case RETRIEVE_USERS:
      return payload;
    //? UPDATE

    case UPDATE_USER:
      return users.map((user) => {
        if (user.id === payload.id) {
          return {
            ...user,
            ...payload,
          };
        } else {
          return user;
        }
      });
    //? DELETE ID
    case DELETE_USER:
      return users.filter(({id}) => id !== payload.id);
    //? DELETE ALL
    case DELETE_ALL_USERS:
      return [];
    default:
      return users;
  }
}
export default userReducer;
