import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/appointment?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setAppointment(data);
      });
  }, [user.email]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-2xl text-primary font-bold">
        My Appointment {appointment.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>Service</th>
              <th>Appointment</th>
              <th>Slot</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((appointment, index) => {
              return (
                <tr key={index}>
                  <th>{(index += 1)}</th>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.patientEmail}</td>
                  <td>{appointment.patientPhone}</td>
                  <td>{appointment.ServiceSelected}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.slot}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
