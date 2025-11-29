import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error('Error fetching appointments:', err));
  }, []);

  return (
    <div className="p-6 bg-[#181818] min-h-screen text-white">
      <h1 className="text-2xl font-semibold mb-4">All Appointments</h1>
      <table className="w-full border border-gray-700 text-sm">
        <thead className="bg-[#202020]">
          <tr>
            <th className="p-2 border-b border-gray-700">User ID</th>
            <th className="p-2 border-b border-gray-700">Service ID</th>
            <th className="p-2 border-b border-gray-700">Date</th>
            <th className="p-2 border-b border-gray-700">Time</th>
            <th className="p-2 border-b border-gray-700">Status</th>
            <th className="p-2 border-b border-gray-700">Notes</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt._id} className="border-b border-gray-700 hover:bg-[#242424]">
              <td className="p-2">{appt.user}</td>
              <td className="p-2">{appt.service}</td>
              <td className="p-2">{new Date(appt.date).toLocaleDateString()}</td>
              <td className="p-2">{appt.timeSlot}</td>
              <td className="p-2 text-yellow-400">{appt.status}</td>
              <td className="p-2">{appt.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsList;
