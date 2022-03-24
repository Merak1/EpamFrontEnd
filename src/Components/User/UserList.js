import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import User from "../User/User";

import {
  retrieveUsers,
  findUsersByTitle,
  deleteAllUsers,
  createUser,
} from "./../../actions/usersActions";

import ConfirmationModal from "Components/Modals/ConfirmationModal";
import AddUser from "./AddUser";
import ContentModal from "Components/Modals/ContentModal";

const UserList = () => {
  const STORE = useStore();
  // useDispatch initialization for handling dispatch
  const dispatch = useDispatch();
  // Obtains current state on the store
  const currentUsersState = useSelector((state) => state).userReducer;
  // Selected user is used for showing user component
  const [selectedUser, setSelectedUser] = useState(null);
  // Selects index of list of Users
  const [currentIndex, setCurrentIndex] = useState(-1);
  // Search User holds the id value to search on search by id action
  const [searchUser, setSerchUser] = useState("");
  // All users Array,
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});

  let [listWasModified, setListWasModified] = useState(0);

  const listModifiedHandler = (n) => {
    setListWasModified(++listWasModified);
  };

  useEffect(() => {
    console.log(`algún cambio en USERS => ${users}, en userlist`);
  }, [users]);

  //TODO This works
  // OnLoad, we dispatch the retrieve users
  useEffect(() => {
    async function fetchData() {
      dispatch(retrieveUsers());
    }
    fetchData();
  }, [dispatch, listWasModified]);

  //Onchange => ,
  useEffect(() => {
    // console.log("users before setuser", users);
    setUsers(currentUsersState);
    refreshData();
  }, [currentUsersState, users]);

  //TODO This works

  // const onChangeSearchUser = (e) => {
  //   const searchUser = e.target.value;
  //   setSerchUser(searchUser);
  //   // console.log(searchUser);
  // };

  const refreshData = () => {
    setSelectedUser(null);
    setCurrentIndex(-1);
  };

  const setActiveUser = (user, index) => {
    setSelectedUser(user);
    setCurrentIndex(index);

    console.log("index=> ", index);
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
  const addNewUser = (data) => {
    setNewUser(data);
    console.log("New User ", newUser);
    const { firstName, lastName, email, phone } = newUser;

    dispatch(createUser(firstName, lastName, email, phone))
      .then((data) => {
        console.log(`se mandó correctamente ${data}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeSearchUser = (e) => {
    const searchTitle = e.target.value;
    setSerchUser(searchTitle);
    console.log(`On change SearchUser is => ${searchUser}`);
  };
  const findByUser = () => {
    refreshData();
    dispatch(findUsersByTitle(searchUser));
  };
  if (users !== []) {
    return (
      <div className="userListComponent row  pb-5">
        <h1 className="userListComponent-title">
          {/* userListComponent = hay {users.length}
          || timees modified = {listWasModified} */}
        </h1>
        <div className="user-list row  col-md-9  col-sm-7 justify-content-around">
          <div className="input-group mb-2">
            <div className="input-group_search ">
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
            <div className="user-preview_header">
              <p>First Name 🖋: </p>
              <p>Last Name: ✏ </p>
              <p>Email: 📧 </p>
              <p>Phone 📞: </p>
            </div>
          </div>

          <div className=" ">
            {users ? (
              users.map((user, index) => (
                <li
                  onClick={() => {
                    setActiveUser(user, index);
                  }}
                  // className="user-preview clickable border "
                  className={`user-preview clickable border ${
                    index === currentIndex ? "active" : ""
                  }`}
                  key={user._id}
                >
                  <p> {user.firstName}</p>
                  <p> {user.lastName}</p>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </li>
              ))
            ) : (
              <div>
                <p>Select a user</p>
              </div>
            )}
          </div>
          <div className="col-md-12  float-start mt-2 user-list_options ">
            <ContentModal
              buttonText={"Create new User"}
              variant={"primary"}
              title={"Create new User"}
              content={<AddUser isAdmin={true} />}
              action={"Create new user VERDE?"}
              accept={"Create User"}
              buttonState={false}
              buttonAction={addNewUser}
              listWasModified={listWasModified}
              listModifiedHandler={listModifiedHandler}
              formId={"createNewUserForm"}
            ></ContentModal>

            <ConfirmationModal
              buttonText={"delete all"}
              variant={"danger"}
              action={"delete this user?"}
              accept={"Delete User"}
              buttonState={false}
              buttonAction={removeAllUsers}
            />

            {/* <button
              className="btn btn-warning noDisplay"
              onClick={() => {
                // console.log(JSON.stringify(STORE));
                console.log(STORE.getState().userReducer);
              }}
            >
              STORE getState userReducer
            </button> */}
          </div>
        </div>
        <div className="  col-md-3 col-sm-5 mt-5 border show-User">
          <User
            selectedUser={selectedUser}
            listWasModified={listWasModified}
            listModifiedHandler={listModifiedHandler}
          />
        </div>
      </div>
    );
  }
  return <p>nO HAY</p>;
};

export default UserList;
