import React from "react";
import { FaRing } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-4">
        <FaRing size={30} color="#2068e6" className="cursor-pointer" />
        <div className="text-2xl font-bold">metafied</div>
      </div>

      <div className="flex items-center justify-evenly space-x-5 ">
        
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-colors duration-200">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
