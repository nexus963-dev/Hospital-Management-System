"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import axios from "axios";

export default function App({ params }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session?.user?.uhid != params?.UHID) {
    return notFound();
  }

  return <Dashboard />;
}

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Vitals");
  const [userData, setUserData] = useState({
    uhid: "",
    name: "",
    email: "",
    contact: "",
    gender: "",
    dateOfBirth: "",
    bloodGroup: "",
    age: "",
  });
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      setUserData({
        uhid: session.user.uhid || "",
        name: session.user.name || "",
        email: session.user.email || "",
        contact: session.user.contact || "",
        gender: session.user.gender || "",
        dateOfBirth: session.user.dateOfBirth || "",
        bloodGroup: session.user.bloodGroup || "",
        age: calculateAge(session.user.dateOfBirth),
      });
    }
  }, [session]);

  function calculateAge(dob) {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
      age: name === "dateOfBirth" ? calculateAge(value) : prev.age,
    }));
  }

  async function handleSave() {
    try {
      console.log("Updating user:", userData);
      const response = await axios.post("/api/users/updateUser", {
        ...userData,
        uhid: session?.user?.uhid,
      });
      console.log("Update Success:", response.data);
      alert("User details updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user details.");
    }
  }

  return (
    <div className="flex h-screen">
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

      <main className="w-4/5 bg-gray-100 p-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Patient Details</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <p className="flex flex-col justify-center">
              <strong>UHID: </strong> {userData.uhid || "N/A"}
            </p>

            <div>
              <label>
                <strong>Name:</strong>
              </label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>

            <div>
              <label>
                <strong>Contact:</strong>
              </label>
              <input
                type="text"
                name="contact"
                value={userData.contact}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>

            <p className="flex flex-col justify-center">
              <strong>Email:</strong> {userData.email}
            </p>

            <div>
              <label>
                <strong>Gender:</strong>
              </label>
              <select
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label>
                <strong>DOB:</strong>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>

            <p>
              <strong>Age:</strong> {userData.age || "N/A"}
            </p>

            <div>
              <label>
                <strong>Blood Group:</strong>
              </label>
              <input
                type="text"
                name="bloodGroup"
                value={userData.bloodGroup}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
          </div>
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>

        {/* Tabbed Interface */}
        <div className="mt-6">
          <div className="flex space-x-4 border-b">
            {[
              "Vitals",
              "Medical History",
              "Diagnosis",
              "Prescription",
              "Lab Order",
            ].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 ${
                  activeTab === tab ? "border-b-2 border-blue-600" : ""
                }`}
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
                <input
                  type="text"
                  placeholder="Temperature (°F)"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Oxygen Level (%)"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Max BP (mmHg)"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Min BP (mmHg)"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Pulse (BPM)"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Height (cm)"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Weight (kg)"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="BMI (kg/m²)"
                  className="p-2 border rounded"
                />
              </div>
            )}
            {activeTab !== "Vitals" && (
              <p>{activeTab} Content Coming Soon...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
