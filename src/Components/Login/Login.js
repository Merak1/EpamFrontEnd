import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { createUser } from "./../../actions/usersActions";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data on submit", data);

    // const { firstName, lastName, email, phone, password } = data;
    // console.log(`password=>  ${password}`);
    // dispatch(createUser(firstName, lastName, email, phone, password))
    //   .then((data) => {
    //     console.log(`se mandó correctamente data`);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       // console.log(`error.response.data => ${error.response.data}`);
    //       // console.log(`error.response.headers => ${error.response.headers}`);
    //       console.log(`error.response.status => ${error.response.status}`);
    //       // TODO Handle error and show a warning that that email already has an user
    //     }
    //   });
  };

  return (
    <div className="login text-center container">
      <div className="row">
        <h1>Login</h1>
        <p></p>
        <form id="createNewUserForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group ">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                // maxLength: 20,
              })}
            />
          </div>

          <div className="form-group ">
            <input
              className="form-control"
              type="text"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: 20,
              })}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
