import React from "react";

const MovieForm = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] bg-[#857d7b] ">
      <form className=" p-8 rounded-lg shadow-md w-full max-w-md space-y-4 border border-[#a2a1a1e9] mt-[-10rem]">
        <input
          type="text"
          placeholder="Enter Movie Code"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Movie Title"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Movie Details"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Image URL"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </form>
    </div>
  );
};

export default MovieForm;
