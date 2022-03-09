import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createUser} from "./../../actions/usersActions";

const AddUser = () => {
  // state
  const dispatch = useDispatch();
  // form-hook
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {firstName, lastName, email, phone} = data;
    dispatch(createUser(firstName, lastName, email, phone))
      .then((data) => {
        console.log(`se mandó correctamente ${data}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="add-user">
      <h1>This is where the form add user will be</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
