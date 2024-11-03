import React from "react";

const SecondDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C157F] via-[#090909] to-[#200434] text-white ">
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          className="rounded-full border-10 border-transparent bg-gradient-to-b from-[#0267e3] via-[#2c11f5] to-[#8c0013] p-6"
          style={{ width: "200px", height: "200px" }}
        >
          <div className="w-full h-full rounded-full bg-black"></div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-3xl font-bold mt-8">Welcome to Metafied</p>
          <p className="text-lg text-gray-400">Log in to Register your email.</p>
          <button className="bg-blue-500 hover:bg-blue-600 w-96 py-2 rounded transition-colors duration-200">
            Continue with Google
          </button>
          <hr className="border-t-2 border-gray-600 w-5/6" />
          <button className="bg-gray-700 hover:bg-gray-600 w-96 py-2 rounded transition-colors duration-200 ">
            Email
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 w-96 py-2 rounded transition-colors duration-200">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondDesign;
