import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import User from "../User/User";

import {
  retrieveUsers,
  findUsersById,
  deleteAllUsers,
} from "./../../actions/usersActions";

const UserList = () => {
  const dispatch = useDispatch();
  const currentUsersState = useSelector((state) => state).userReducer;

  const [selectedUser, setSelectedUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchUser, setSerchUser] = useState("");
  const [users, setUsers] = useState([]);

  // OnLoad, we dispatch the retrieve users
  useEffect(() => {
    async function fetchData() {
      dispatch(retrieveUsers());
    }
    fetchData();
  }, [dispatch]);

  //Onchange => ,
  useEffect(() => {
    console.log("users before setuser", users);
    setUsers(currentUsersState);
  }, [currentUsersState, users]);

  const onChangeSearchUser = (e) => {
    const searchUser = e.target.value;
    setSerchUser(searchUser);
    // console.log(searchUser);
  };
  const refreshData = () => {
    setSelectedUser(null);
    setCurrentIndex(-1);
  };
  const setActiveUser = (user, index) => {
    setSelectedUser(user);
    setCurrentIndex(index);
    console.log(user);
  };

  const findByUser = () => {
    refreshData();
    console.log(`Im sending ${searchUser}`);
    dispatch(findUsersById(searchUser));
  };

  const removeAllUsers = () => {
    dispatch(deleteAllUsers())
      .then((response) => {
        console.log(response);
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    console.log(`Test => ${e.target.innerText}`);
  };

  if (users !== []) {
    return (
      <div className="row mt-5">
        <div className="user-list row  col-md-9  col-sm-7 justify-content-around">
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control  "
              placeholder="Search by User name"
              value={searchUser}
              onChange={onChangeSearchUser}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByUser}
              >
                Search
              </button>
            </div>
          </div>

          <div className=" row">
            {users.map((user, index) => (
              <div
                onClick={() => setActiveUser(user, index)}
                className=" col-md-4 border "
                key={user._id}
              >
                <p>First Name 🖋: {user.firstName}</p>
                <p>Last Name: ✏{user.lastName}</p>
                <p>Email: 📧{user.email}</p>
                <p>Phone 📞: {user.phone}</p>
              </div>
            ))}
          </div>
          <div className="col-md-12  float-start mt-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={removeAllUsers}
              disabled
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="  col-md-3 col-sm-5 mt-5 border">
          <User selectedUser={selectedUser} />
        </div>
      </div>
    );
  }
  return <p>nO HAY</p>;
};

export default UserList;
