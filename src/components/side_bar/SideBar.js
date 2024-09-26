import React from 'react';
import { FaTachometerAlt, FaUser, FaGem, FaFolder, FaUsers, FaInfoCircle, FaUpload, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-5 border-r-2 border-gray-200 shadow-lg flex flex-col justify-between h-full"> 
      <h2 className="text-xl font-bold mb-6 text-center">INFLUENCER</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <a href='/dashboard' className="flex items-center p-2 w-full h-12 rounded-md bg-gray-800 text-white hover:bg-gray-700">
            <FaTachometerAlt className="mr-3" /> Dashboard
          </a>
        </li>
        <li className="flex items-center">
          <a href='/request' className="flex items-center p-2 w-full h-12 rounded-md hover:bg-gray-200 text-gray-800">
            <FaUser className="mr-3" /> Request
          </a>
        </li>
        <li className="flex items-center">
          <a href='/brand' className="flex items-center p-2 w-full h-12 rounded-md hover:bg-gray-200 text-gray-800">
            <FaGem className="mr-3" /> Brand
          </a>
        </li>
        <li className="flex items-center">
          <a href='/portfolio' className="flex items-center p-2 w-full h-12 rounded-md hover:bg-gray-200 text-gray-800">
            <FaFolder className="mr-3" /> Portfolio
          </a>
        </li>
        <li className="flex items-center">
          <a href='/membership' className="flex items-center p-2 w-full h-12 rounded-md hover:bg-gray-200 text-gray-800">
            <FaUsers className="mr-3" /> Membership
          </a>
        </li>
        <li className="flex items-center">
          <a href='/about' className="flex items-center p-2 w-full h-12 rounded-md hover:bg-gray-200 text-gray-800">
            <FaInfoCircle className="mr-3" /> About
          </a>
        </li>
      </ul>
      <ul className="space-y-4">
        <li className="flex items-center">
          <a href='/uploadwork' className="flex items-center p-2 w-full h-12 rounded-md hover:bg-gray-200 text-gray-800">
            <FaUpload className="mr-2" /> Upload work
          </a>
        </li>
        <li className="flex items-center">
          <a href='/setting' className="flex items-center p-2 w-full h-12 rounded-md hover:bg-gray-200 text-gray-800">
            <FaCog className="mr-3" /> Setting
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
