"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function PatientPage() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    age: "",
    condition: "",
    contact: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/save-patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) alert("Data saved successfully!");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="max-w-2xl p-8 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold">Patient Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Age</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Medical Condition</label>
          <textarea
            value={formData.condition}
            onChange={(e) => setFormData({...formData, condition: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Save Information
        </button>
      </form>
    </div>
  );
}