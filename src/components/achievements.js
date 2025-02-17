import React from "react";

const achievements = [
  { title: "Patients Treated", value: "5000+", description: "Successfully treated over 5000 patients." },
  { title: "Doctors & Staff", value: "100+", description: "Managing over 100 healthcare professionals." },
  { title: "Reduced Waiting Time", value: "40%", description: "Optimized scheduling to reduce waiting times." },
  { title: "AI Diagnosis", value: "Smart AI", description: "Implemented AI-powered diagnosis assistance." },
  { title: "HIPAA Compliant", value: "100% Secure", description: "Ensuring full security and data protection." },
  { title: "Uptime Reliability", value: "99.9%", description: "Guaranteed service uptime for uninterrupted care." }
];

const services = [
  { title: "24/7 Emergency Care", description: "Immediate medical attention anytime." },
  { title: "Telemedicine", description: "Consult doctors online from anywhere." },
  { title: "Pharmacy Services", description: "Order medicines online with doorstep delivery." },
  { title: "Lab Testing", description: "Book lab tests and receive reports online." },
  { title: "Health Programs", description: "Wellness and preventive health checkups." }
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-gray-800 transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600">{achievement.value}</h3>
            <p className="text-lg font-semibold mt-2">{achievement.title}</p>
            <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-gray-800 transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-green-600">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;