import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ConfirmationModal from "Components/Modals/ConfirmationModal";
import ContentModal from "Components/Modals/ContentModal";
import UpdateUserModal from "Components/Modals/UpdateUserModal";

import { deleteUser } from "../../actions/usersActions";

const User = ({ selectedUser, listWasModified, listModifiedHandler }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(selectedUser);
  }, [user, selectedUser]);

  const deleteCurrentUser = () => {
    dispatch(deleteUser(selectedUser._id))
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {selectedUser ? (
        <div className="userComponent">
          <h3 className="userComponent-title">User component</h3>
          <section className="userdata_edit">
            <p>First Name:</p>
            <p>{selectedUser.firstName}</p>
          </section>
          <section className="userdata_edit">
            <p> Last Name:</p>
            <p> {selectedUser.lastName}</p>
          </section>
          <section className="userdata_edit">
            <p>Email:</p>
            <p> {selectedUser.email} </p>
          </section>
          <section className="userdata_edit">
            <p>Phone:</p>
            <p> {selectedUser.phone} </p>
          </section>
          <section className="userdata_button">
            {/* <ContentModal
              buttonText={"Update"}
              variant={"primary"}
              title={"Update"}
              content={<UpdateUser />}
              action={"Update user?"}
              accept={"Update User"}
              buttonState={false}
              buttonAction={updateUser}
              formName={"createNewUserForm"}
            /> */}
            <UpdateUserModal
              buttonText={"update user"}
              variant={"primary"}
              action={"Update user?"}
              accept={"Update"}
              selectedUser={selectedUser}
              formId={"formUpdateUser"}
              listWasModified={listWasModified}
              listModifiedHandler={listModifiedHandler}
            ></UpdateUserModal>

            <ConfirmationModal
              buttonText={"x"}
              variant={"danger"}
              action={"delete this user?"}
              accept={"Delete User"}
              buttonState={false}
              buttonAction={deleteCurrentUser}
              listWasModified={listWasModified}
              listModifiedHandler={listModifiedHandler}
            />
          </section>
        </div>
      ) : (
        <div>
          <p>Please select a User</p>
        </div>
      )}
    </>
  );
};

export default User;
