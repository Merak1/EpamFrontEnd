import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { loginUser, reset } from "../../Helpers/Auth/AuthSlice";

const Login = () => {
  const STORE = useStore();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    console.log(`
                🔻 any of these 🔻
    user, isError, isSuccess, message, navigate
                    triggered
    `);
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (data) => {
    console.log("data on submit", data);
    const { email, password } = data;
    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };
  if (!isLoading) {
    return (
      <div className="login text-center container">
        <div className="row">
          <h1>Login</h1>
          <p></p>
          <form
            className=" form"
            id="createNewUserForm"
            onSubmit={handleSubmit(onSubmit)}
          >
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
              {errors.email?.type === "required" && "Email is required"}
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
              {errors.password?.type === "required" &&
                "Please submit a password"}
              {errors.password?.type === "maxLength" &&
                "Please submit a password"}
            </div>
          </form>
          <input
            type="submit"
            form={"createNewUserForm"}
            className="btn btn-primary input-submit"
            // onClick={onAccept}
          />
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Login;
