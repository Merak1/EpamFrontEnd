import React, { useState, useEffect, useCallback } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { updateUser } from "../../actions/usersActions";

const UpdateUserModal = ({
  buttonText,
  variant,
  content,
  accept,
  buttonState,
  selectedUser,
  listWasModified,
  listModifiedHandler,
  formId,
}) => {
  // state
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log(`show add user modal=> ${show}`);
  };
  const handleShow = () => {
    setShow(true);

    console.log(`show add user modal=> ${show}`);
  };
  const onAccept = () => {
    handleClose();
    onSubmit();
    // reset();
  };

  const onSubmit = (data) => {
    let id = selectedUser._id;
    setNewUser(data);

    console.log("data=> ", JSON.stringify({ newUser }));
    console.log(`selectedUser id  => ${id}`);

    //! aquí va el metodo disptach para updatear un user
    // dispatch(updateUser(id, data))
    //   .then((response) => {
    //     console.log("response from updateUserModal", response);
    //     listModifiedHandler(listWasModified);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  return (
    <>
      <Button variant={variant} onClick={handleShow} disabled={buttonState}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <AddUser /> */}
          <div className="add-user">
            <form id={formId} onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="">First Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  defaultValue={selectedUser.firstName}
                  {...register("firstName")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  defaultValue={selectedUser.lastName}
                  {...register("lastName")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email:</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  defaultValue={selectedUser.email}
                  {...register("email")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Phone:</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  defaultValue={selectedUser.phone}
                  {...register("phone")}
                />
              </div>
              <div className="form-group"></div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <input
            type="submit"
            form={formId}
            className="btn btn-primary"
            onClick={onAccept}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateUserModal;
