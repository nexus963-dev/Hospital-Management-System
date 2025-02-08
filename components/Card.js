import React from 'react';

const Card = ({ title, value, percentage, icon, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-xl ${bgColor} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-lg font-semibold">{value}</p>
          <p className="text-sm opacity-80">{percentage}</p>
        </div>
        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

const CardsPage = () => {
  return (
    <div className="min-h-7 bg-gray-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Doctors"
          value="Total Doctors: 500+"
          percentage="80% Satisfaction"
          icon="👨‍⚕️"
          bgColor="bg-blue-600"
        />
        <Card
          title="Patients"
          value="Total Patients: 1000+"
          percentage="60% Recovery Rate"
          icon="👩‍⚕️"
          bgColor="bg-green-600"
        />
        <Card
          title="Report"
          value="Monthly Report"
          percentage="20% Growth"
          icon="📊"
          bgColor="bg-purple-600"
        />
        <Card
          title="Balance"
          value="Income vs Outcome"
          percentage="Positive Balance"
          icon="💰"
          bgColor="bg-yellow-600"
        />
      </div>
    </div>
  );
};

export default CardsPage;