import React, { useEffect } from "react";
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
      <button
        className="btn btn-warning "
        onClick={() => {
          // console.log(JSON.stringify(STORE));
          console.log(STORE.getState().auth);
        }}
      >
        STORE getState userReducer
      </button>
      <form id="createNewUserForm" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="form-group ">
              <input
                className="form-control"
                type="text"
                name="password2"
                placeholder="Password2"
                {...register("password2", {
                  required: true,
                  maxLength: 20,
                })}
              />
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
