import axios from "axios";
import UserService from "../../services/userService";

// the service is strictly for makign the http request and sending the data toBePartiallyChecked, and setting any data in local storage
const API_URL = "/users/";

// register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  // const response = await UserService.create({ userData });

  console.log("userData ", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  // const response = await UserService.create({ userData });

  console.log("userData ", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  logout,
  login,
};

export default authService;
