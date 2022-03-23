import AddUser from "Components/User/AddUser";
import React from "react";

const UserCreateNewUser = () => {
  return (
    <div>
      <h1>UserCreateNewUser</h1>
      <AddUser isAdmin={false} />

      <input
        type="submit"
        form="createNewUserForm"
        className="btn btn-primary"
        // onClick={onAccept}
      />
    </div>
  );
};

export default UserCreateNewUser;
