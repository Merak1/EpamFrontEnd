import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { createUser } from "./../../actions/usersActions";
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector, useStore } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { toast, ToastContainer } from "react-toastify";

// import { register, reset } from "../../Helpers/Auth/AuthSlice";

// import { deleteUser } from "../../actions/authActions";
// import { createUser } from "actions/usersActions";

const AddUser = ({ isAdmin }) => {
  // state
  // const STORE = useStore();

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // let { user, isLoading, isError, isSuccess, message } = [];
  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state
  // );
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   if (isSuccess || user) {
  //     navigate("/");
  //   }

  //   console.log(`
  //               🔻 any of these 🔻
  //   user, isError, isSuccess, message, navigate
  //                   triggered
  //   `);
  //   dispatch(reset());
  //   // }, [user, isError, isSuccess, message, navigate]);
  // }, []);

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
  // const onSubmit = (data) => {
  //   console.log("data on submit", data);

  //   const { firstName, lastName, email, phone, password } = data;
  //   console.log(`password=>  ${password}`);
  //   const userData = {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     password,
  //   };
  //   dispatch(register(userData));
  // };
  return (
    <div className="addUserComponent">
      {/* <button
        className="btn btn-warning "
        onClick={() => {
          // console.log(JSON.stringify(STORE));
          console.log(STORE.getState().auth);
        }}
      >
        STORE getState userReducer
      </button> */}
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
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default AddUser;
