import axios from "axios";

// the service is strictly for makign the http request and sending the data toBePartiallyChecked, and setting any data in local storage
const API_URL = "/appointments/";

// const API_URL = "http://localhost:4000/appointments/";
// create new appoinment
const createAppointment = async (appointmentData, token) => {
  console.log("appointmentData  from app service=> ", appointmentData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, appointmentData, config);
  console.log(`🎄 appointment successfully created `, response);
  return response.data;
};
// get all appointments
const getAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};
// get appointment
const deleteAppointment = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);
  return response.data;
};
// const updateAppointment = async (newAppointmentData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.put(API_URL, newAppointmentData, config);
//   console.log(`🎄 appointment successfully updated `, response);
//   return response.data;
// };
const appointmentService = {
  createAppointment,
  getAppointments,
  deleteAppointment,
  // updateAppointment,
};

export default appointmentService;
