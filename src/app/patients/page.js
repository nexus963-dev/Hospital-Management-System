"use client";
import { useState } from "react";

export default function App() {
  return <Dashboard />;
}

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Vitals");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold">CLINIC MANAGEMENT SYSTEM</h2>
        <ul className="mt-4">
          <li className="py-2">Appointment</li>
          <li className="py-2">Registration</li>
          <li className="py-2">Consultation</li>
          <li className="py-2">Tele Consultation</li>
          <li className="py-2">Billing</li>
          <li className="py-2">MIS Report</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 bg-gray-100 p-6">
        {/* Patient Details */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Patient Details</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <p><strong>UHID:</strong> U-HID000037</p>
            <p><strong>Name:</strong> Amar Kumar</p>
            <p><strong>Mobile:</strong> 9745608625</p>
            <p><strong>Email:</strong> arjun@tashahealthcare.com</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Age:</strong> 39 years</p>
            <p><strong>DOB:</strong> 1982-07-22</p>
            <p><strong>Blood Group:</strong> O+</p>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="mt-6">
          <div className="flex space-x-4 border-b">
            {["Vitals", "Medical History", "Diagnosis", "Prescription", "Lab Order"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 ${activeTab === tab ? "border-b-2 border-blue-600" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 p-4 bg-white rounded shadow">
            {activeTab === "Vitals" && (
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Temperature (°F)" className="p-2 border rounded" />
                <input type="text" placeholder="Oxygen Level (%)" className="p-2 border rounded" />
                <input type="text" placeholder="Max BP (mmHg)" className="p-2 border rounded" />
                <input type="text" placeholder="Min BP (mmHg)" className="p-2 border rounded" />
                <input type="text" placeholder="Pulse (BPM)" className="p-2 border rounded" />
                <input type="text" placeholder="Height (cm)" className="p-2 border rounded" />
                <input type="text" placeholder="Weight (kg)" className="p-2 border rounded" />
                <input type="text" placeholder="BMI (kg/m²)" className="p-2 border rounded" />
              </div>
            )}
            {activeTab !== "Vitals" && <p>{activeTab} Content Coming Soon...</p>}
          </div>
        </div>
      </main>
    </div>
  );
}