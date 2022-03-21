import {
  CREATE_USER,
  RETRIEVE_USERS,
  UPDATE_USER,
  DELETE_USER,
  DELETE_ALL_USERS,
  RETRIEVE_USER,
} from "./types.js";

// UserService = axios Service http.get
import UserService from "../services/userService";

export const createUser =
  (firstName, lastName, email, phone) => async (dispatch) => {
    try {
      const res = await UserService.create({
        email,
        firstName,
        lastName,
        phone,
      });
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveUser = (id) => async (dispatch) => {
  try {
    const res = await UserService.get(id);
    dispatch({
      type: RETRIEVE_USER,
      payload: res.data,
    });
    // const user = Promise.resolve(res.data);
    // console.log(`user from userAction => ${user}`);
    // return user;
  } catch (err) {
    console.log(err);
    console.log(`the failed id is ${id}`);
  }
};
export const retrieveUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getAll();
    // res = "http://localhost:4000/".get("/users");
    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.update(id, data);
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await UserService.remove(id);
    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
    console.log(`res => ${res}`);
  } catch (err) {
    console.log(err);
  }
};
export const deleteAllUsers = () => async (dispatch) => {
  try {
    const res = await UserService.removeAll();
    dispatch({
      type: DELETE_ALL_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const findUsersById = (id) => async (dispatch) => {
  try {
    const res = await UserService.findById(id);
    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
  }
};
