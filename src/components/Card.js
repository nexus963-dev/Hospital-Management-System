import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Card = ({ title, value, percentage, icon, bgColor, link }) => {
  return (
    <Link href={link} passHref>
      <div className={`p-6 rounded-lg shadow-xl ${bgColor} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg font-semibold">{value}</p>
            <p className="text-sm opacity-80">{percentage}</p>
          </div>
          <div className="text-4xl">{icon}</div>
        </div>
      </div>
    </Link>
  );
};



const CardsPage = () => {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Doctors"
          value="Total Doctors: 500+"
          percentage="80% Satisfaction"
          icon="👨‍⚕️"
          bgColor="bg-blue-600"
          link="/doctors"
        />
        <Card
          title="Patients"
          value="Total Patients: 1000+"
          percentage="60% Recovery Rate"
          icon="👩‍⚕️"
          bgColor="bg-green-600"
          link={`/patients/${session?.user?.uhid}`}
        />
        <Card
          title="Report"
          value="Monthly Report"
          percentage="20% Growth"
          icon="📊"
          bgColor="bg-purple-600"
          link="/report"
        />
        <Card
          title="Balance"
          value="Income vs Outcome"
          percentage="Positive Balance"
          icon="💰"
          bgColor="bg-yellow-600"
          link="/balance"
        />
      </div>
    </div>
  );
};

export default CardsPage;
