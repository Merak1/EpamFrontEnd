import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import {
  createAppointment,
  reset,
} from "../Helpers/Appointment/appointmentSlice";

const AddAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log("dispatching data from add appointment  ", data);

    dispatch(createAppointment(data));
  };

  return (
    <div className="addAppointment">
      <form
        className=" form"
        id="createNewAppointmentForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" form-group  ">
          <input
            className="form-control "
            type="text"
            name="medicalSpecialty"
            placeholder="medicalSpecialty"
            // defaultValue={"FirstName"}
            {...register("medicalSpecialty", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.medicalSpecialty && <span>This field is required</span>}
        </div>
        <div className=" form-group  ">
          <input
            className="form-control "
            type="text"
            name="description"
            placeholder="A brief description of the reason for the appointment"
            // defaultValue={"FirstName"}
            {...register("description", {
              required: true,
              //   maxLength: 20,
            })}
          />
          {errors.description && <span>This field is required</span>}
        </div>
      </form>
    </div>
  );
};

export default AddAppointment;
