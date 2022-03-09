import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {retrieveUser, findUsersById} from "./../../actions/usersActions";

const UserCopy = () => {
  // const currentUsersState = useSelector((state) => state).userReducer;
  const location = useLocation();
  const currentUrlId = location.pathname.replace("/users/", "");
  let currentUsersState = useSelector((state) => state).userReducer;

  // currentUsersState = currentUsersState.filter((data) => {
  //   const dataFiltered = data._id === currentUrlId ? data : 0;
  //   return dataFiltered;
  // });
  // // currentUsersState = `${currentUsersState}`;

  // console.log(`currentUsersState from any => ${currentUsersState[0]}`);

  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  let getFilteredCurrentUser = (userList) => {
    let filtered = userList.filter((data) => {
      const dataFiltered = data._id === userId ? data : 0;
      return dataFiltered;
    });
    return filtered[0];
  };

  useEffect(() => {
    // We get the url string and extract only the id
    // and we set it to UserId
    setUserId(currentUrlId);
    // console.log(`userID from when initialized => ${userId}`);
    setUserList(currentUsersState);
    // we log both things
    // console.log(`userList from when initialized => ${userList}`);
  }, []);

  useEffect(() => {
    setUserId(currentUrlId);

    // and we set it to UserId
    // setUserId(currentUrlId);
    // We set the global state to userList
    setUserList(currentUsersState);
    // we log both things
    // console.log(`userList from secondUE => ${userList}`);
    // console.log(`userId from secondUE => ${userId}`);
  }, [currentUsersState, userId, userList]);

  useEffect(() => {
    // we run the function getFilteredCurrentUser to get the data of current user
    const currentUserFiltered = getFilteredCurrentUser(userList);

    // we log the current user data
    // console.log("currentUserFiltered => ", currentUserFiltered);
    // we set the current user object data as our user on state
    setUser(currentUserFiltered);

    // we log our full user
    // console.log("user => ", user);
  }, [userId, user]);

  return (
    <>
      {user ? (
        <div className="user row text-center">
          <div className="col-12">
            <h3>User details</h3>
            <p> First Name: {user.firstName}</p>
            <p> Last Name: {user.lastName}</p>
            <p> Email: {user.email} </p>
            <p> Phone: {user.phone}</p>
          </div>
          <div className="col">
            <p>acá van otras cosas </p>
          </div>
        </div>
      ) : (
        <div className="no-user">
          <p>No user selected</p>
        </div>
      )}
    </>
  );
};

export default UserCopy;
