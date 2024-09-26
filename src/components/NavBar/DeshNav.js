import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const DeshNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md w-full">

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow outline-none px-2"
        />
        <button className="text-white bg-teal-500 p-2 rounded-full flex items-center justify-center">
          <FaSearch />
        </button>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaBell className="text-teal-500 text-xl" />
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full ring-2 ring-white"></span>
        </div>
        <div className="flex items-center">
          <div className="text-right mr-3">
            <h4 className="text-sm font-semibold">Bonet Smith</h4>
            <p className="text-xs text-gray-500">Bonte@gmail.com</p>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default DeshNavbar;
