import { useDispatch, useSelector } from "react-redux";
import { deleteAppointment } from "Helpers/Appointment/appointmentSlice";

const Appointment = ({ appointment }) => {
  const dispatch = useDispatch();

  return (
    <div className="appointment">
      <div className="appointment-buttons">
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteAppointment(appointment._id))}
        >
          X
        </button>
        {/* <button className="btn btn-primary">Editar</button> */}
      </div>
      {/* <p>{new Date(appointment.createdAt).toLocaleString("en-US")} </p> */}
      <p> {appointment.createdAt} </p>
      <p> Medical Specialty = {appointment.medicalSpecialty} </p>
      <p> Description = {appointment.description} </p>
    </div>
  );
};

export default Appointment;
