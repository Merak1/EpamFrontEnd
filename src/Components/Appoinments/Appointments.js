import AddAppointment from "Components/AddAppointment";
import ContentModal from "Components/Modals/ContentModal";
import { getAppointments, reset } from "Helpers/Appointment/appointmentSlice";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Appointment from "./Appointment";

const Appointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { appointments, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.appointments
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getAppointments());

    return () => {
      dispatch(reset);
    };
  }, [user, navigate, isError, dispatch, message]);

  return (
    <div className="appointments-container container-">
      <ContentModal
        buttonText={"Add new Appointment"}
        variant={"primary"}
        title={"Create new appointment"}
        content={<AddAppointment isAdmin={true} />}
        action={"Create this appointment?"}
        accept={"Create"}
        buttonState={false}
        // buttonAction={addNewAppointment}
        // listWasModified={listWasModified}
        // listModifiedHandler={listModifiedHandler}
        formId={"createNewAppointmentForm"}
      />

      {appointments.length > 0 ? (
        // <div>Si hay appointments </div>
        <div className="appointments ">
          {appointments.map((appointment) => (
            <Appointment key={appointment._id} appointment={appointment} />
          ))}
        </div>
      ) : (
        <div>You have no appointments</div>
      )}
    </div>
  );
};

export default Appointments;
