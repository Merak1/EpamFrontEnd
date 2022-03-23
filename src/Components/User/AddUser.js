import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { createUser } from "./../../actions/usersActions";

const AddUser = ({ isAdmin }) => {
  // state
  const dispatch = useDispatch();
  // form-hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data on submit", data);

    const { firstName, lastName, email, phone, password } = data;
    console.log(`password=>  ${password}`);
    dispatch(createUser(firstName, lastName, email, phone, password))
      .then((data) => {
        console.log(`se mandó correctamente data`);
      })
      .catch((error) => {
        if (error.response) {
          // console.log(`error.response.data => ${error.response.data}`);
          // console.log(`error.response.headers => ${error.response.headers}`);
          console.log(`error.response.status => ${error.response.status}`);
          // TODO Handle error and show a warning that that email already has an user
        }
      });
  };

  return (
    <div className="addUserComponent">
      <form id="createNewUserForm" onSubmit={handleSubmit(onSubmit)}>
        <h1> {`${isAdmin}`} </h1>
        <div className="form-group">
          <label htmlFor="">First Name:</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            {...register("firstName", {
              required: true,
              maxLength: 20,
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name:</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            {...register("lastName")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input
            className="form-control"
            type="email"
            name="firstName"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Phone:</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            {...register("phone")}
          />
        </div>
        {isAdmin === false ? (
          <div className="form-group">
            <label htmlFor="">Password:</label>
            <input
              className="form-control"
              type="text"
              name="password"
              defaultValue={
                "TODO: Dejar chulo el authentification con password"
              }
              {...register("password")}
            />
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default AddUser;
