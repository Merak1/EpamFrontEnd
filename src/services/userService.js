// import http from "../Helpers/http-common";
// class UserService {
//   getAll() {
//     return http.get("/users");
//   }
//   get(id) {
//     return http.get(`/users/${id}`);
//   }
//   create(data) {
//     return http.post("/users", data);
//   }
//   update(id, data) {
//     return http.put(`/user/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/users/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/users`);
//   }
//   findById(id) {
//     return http.get(`/users?id=${id}`);
//   }
// }
// export default new UserService();

// import http from "../http-common";
import http from "../Helpers/http-common";

const getAll = () => {
  return http.get("/users");
};
const get = (id) => {
  return http.get(`/users/${id}`);
};
const create = (data) => {
  return http.post("/users", data);
};
const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/users/${id}`);
};
const removeAll = () => {
  return http.delete(`/users`);
};
const findByTitle = (title) => {
  return http.get(`/users?title=${title}`);
};
const userService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
export default userService;
