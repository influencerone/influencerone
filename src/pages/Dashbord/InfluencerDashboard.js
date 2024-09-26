import React from "react";
import { Alpha, Lencecart, Cors, Boat, Toch, Home, Card } from "../../asstes";

const DashboardPage = () => {
  return (
    <div className={`flex flex-col justify-between h-full`}>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="w-[233px] h-[165px] p-4 border-2 border-blue-500 rounded-lg bg-blue-100 flex flex-col items-start justify-center">
          <div className="text-gray-700 flex flex-col items-start">
            {" "}
            {/* Changed from items-center to items-start */}
            {/* Replace the icon with a round image */}
            <img
              src={Toch} // Replace with the path to your image
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full" // Adjust width and height as needed
            />
            <p className="text-lg">Total Earning</p>
            <p className="text-2xl font-bold">$3127</p>
          </div>
        </div>

        <div className="w-[233px] h-[165px] p-4 border-2 border-blue-500 rounded-lg bg-blue-100 flex flex-col items-start justify-center">
          <div className="text-gray-700 flex flex-col items-start">
            {" "}
            {/* Changed from items-center to items-start */}
            {/* Replace the icon with a round image */}
            <img
              src={Home} // Replace with the path to your image
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full" // Adjust width and height as needed
            />
            <p className="text-lg">Total Earning</p>
            <p className="text-2xl font-bold">$3127</p>
          </div>
        </div>
        <div className="w-[233px] h-[165px] p-4 border-2 border-blue-500 rounded-lg bg-blue-100 flex flex-col items-start justify-center">
          <div className="text-gray-700 flex flex-col items-start">
            {" "}
            {/* Changed from items-center to items-start */}
            {/* Replace the icon with a round image */}
            <img
              src={Card} // Replace with the path to your image
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full" // Adjust width and height as needed
            />
            <p className="text-lg">Total Earning</p>
            <p className="text-2xl font-bold">$3127</p>
          </div>
        </div>
        <div className="w-[233px] h-[165px] p-4 border-2 border-blue-500 rounded-lg bg-blue-100 flex flex-col items-start justify-center">
          <div className="text-gray-700 flex flex-col items-start">
            {" "}
            {/* Changed from items-center to items-start */}
            {/* Replace the icon with a round image */}
            <img
              src={Toch} // Replace with the path to your image
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full" // Adjust width and height as needed
            />
            <p className="text-lg">Total Earning</p>
            <p className="text-2xl font-bold">$3127</p>
          </div>
        </div>
      </div>

       <div className="mt-8">
        <div className="flex items-center justify-between w-full mt-8">
          <h2 className="text-xl font-semibold">Collaboration History</h2>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            View All
          </button>
        </div>
        <div className="flex justify-around mt-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={Alpha}
              alt="Boat"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={Lencecart}
              alt="Lenskart"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={Cors}
              alt="Bewakoof"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={Boat}
              alt="Crocs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
       </div>

    </div>
  );
};

export default DashboardPage;
