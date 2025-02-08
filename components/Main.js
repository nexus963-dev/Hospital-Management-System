import React from 'react';
import Motivation_Image from "../public/assests/images/motivation.jpeg";
import Image from 'next/image';
import Card from './Card';
import Background from '../public/assests/images/background.jpg';

const Main = () => {
    return (
        <div className="flex-1 p-8 ">
            <h1 className="text-3xl text-white font-bold mb-6 text-gray-800">Welcome to OUR HOSPITAL MANAGEMENT SYSTEM</h1>
            <div className="flex justify-center mb-8">
                <Image src={Motivation_Image} alt="Motivation" width={700} height={400}
                    className="rounded-lg shadow-lg" />
            </div>

            {/* <div className="headings flex justify-around mb-6 text-xl font-semibold text-gray-700">
                <div>Doctors</div>
                <div>Patients</div>
                <div>Reports</div>
                <div>Balance</div>
            </div> */}
            <div className="cards">
                <Card/>
            </div>
        </div>
    );
};

export default Main;