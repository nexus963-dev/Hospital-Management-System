"use client";
import { useState, useEffect } from "react";

const parseTime = (timeStr) => {
  const [time, modifier] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;
  return hours * 60 + (minutes || 0);
};

const minutesToTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${mins.toString().padStart(2, '0')} ${ampm}`;
};

const parseIntervals = (intervalStr) => {
  return intervalStr.split(', ').map(interval => {
    const [start, end] = interval.split(' - ');
    return { 
      start: parseTime(start),
      end: parseTime(end)
    };
  });
};

const computeAvailableSlots = (availability, busy) => {
  let available = [...availability];
  busy.forEach(busyInterval => {
    available = available.flatMap(availInterval => {
      if (busyInterval.start >= availInterval.end || 
          busyInterval.end <= availInterval.start) {
        return [availInterval];
      }
      const slots = [];
      if (availInterval.start < busyInterval.start) {
        slots.push({ 
          start: availInterval.start, 
          end: busyInterval.start 
        });
      }
      if (availInterval.end > busyInterval.end) {
        slots.push({ 
          start: busyInterval.end, 
          end: availInterval.end 
        });
      }
      return slots;
    });
  });
  return available;
};

export default function AppointmentSystem() {
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (!selectedHospital || !selectedDate) return;
      
      setLoading(true);
      try {
        const XLSX = await import("xlsx");
        const response = await fetch(`/${selectedHospital}`);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        const processedData = jsonData.map(doctor => {
          const availability = parseIntervals(doctor.Availability);
          const busy = parseIntervals(doctor['Busy Slots']);
          const availableSlots = computeAvailableSlots(availability, busy);
          
          return {
            ...doctor,
            availableSlots: availableSlots.map(slot => ({
              start: minutesToTime(slot.start),
              end: minutesToTime(slot.end)
            }))
          };
        });

        setDoctors(processedData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedHospital, selectedDate]);

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Doctor Appointment System
      </h1>

      <div className="max-w-2xl mx-auto mb-8 space-y-4">
        <div>
          <label className="block mb-2">Select Hospital:</label>
          <select
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            onChange={(e) => setSelectedHospital(e.target.value)}
          >
            <option value="">Choose Hospital</option>
            <option value="hospital_data.xlsx">Hospital 1</option>
            <option value="structured_hospital_data (1).xlsx">Hospital 2</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Select Date:</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="text-center">Loading availability data...</p>}

      {doctors.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 text-left">Doctor Name</th>
                <th className="p-3 text-left">Specialty</th>
                <th className="p-3 text-left">Available Slots</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-800"
                >
                  <td className="p-3">{doctor['Doctor Name']}</td>
                  <td className="p-3">{doctor.Specialty}</td>
                  <td className="p-3">
                    {doctor.availableSlots.length > 0 ? (
                      doctor.availableSlots.map((slot, i) => (
                        <div key={i} className="mb-1">
                          {slot.start} - {slot.end}
                        </div>
                      ))
                    ) : (
                      <span className="text-red-400">No available slots</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}