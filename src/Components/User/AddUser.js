import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import { registerUser, reset } from "../../Helpers/Auth/AuthSlice";

const AddUser = ({ isAdmin }) => {
  // state
  const STORE = useStore();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [password2Shown, setPassword2Shown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePassword2Visiblity = () => {
    setPassword2Shown(password2Shown ? false : true);
  };
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { firstName, lastName, email, phone, password, password2 } = data;
    if (password !== password2) {
      toast.error("Passwords do not match 🤔");
    } else {
      dispatch(registerUser(data));
    }
  };

  return (
    <div className="addUserComponent">
      <form
        autocomplete="off"
        className=" form"
        id="createNewUserForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" form-group  ">
          <input
            className="form-control "
            type="text"
            name="firstName"
            placeholder="First Name"
            // defaultValue={"FirstName"}
            {...register("firstName", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="form-group ">
          <input
            className="form-control"
            type="text"
            name="lastName"
            placeholder="Last Name"
            {...register("lastName", {
              required: true,
              maxLength: 20,
            })}
          />
        </div>
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
            name="phone"
            placeholder="Phone"
            {...register("phone", {
              required: true,
              maxLength: 20,
            })}
          />
        </div>
        {isAdmin === false ? (
          <>
            <div className="form-group form-eye">
              <input
                className="form-control"
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                })}
              />
              <i className="eye" onClick={togglePasswordVisiblity}>
                {<FaEye />}
              </i>
            </div>
            <div className="form-group form-eye">
              <input
                className="form-control"
                type={password2Shown ? "text" : "password"}
                name="password2"
                placeholder="Please repeat the password"
                {...register("password2", {
                  required: true,
                  maxLength: 20,
                })}
              />
              <i className="eye" onClick={togglePassword2Visiblity}>
                {<FaEye />}
              </i>
            </div>
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default AddUser;
