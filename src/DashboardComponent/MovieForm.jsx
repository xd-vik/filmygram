import React from "react";

const MovieForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-[#857d7b] mb-5 ">
      <form className=" p-8 rounded-lg shadow-md w-full max-w-md space-y-4 border border-[#a2a1a1e9] mt-[-10rem]">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Movie Code"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <button className="px-4 py-1 border border-[#747474] font-bold rounded-md bg-[#2563eb] text-[#dadada] text-sm ">
            fetch api
          </button>
        </div>
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

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Download Links</h2>

        <div className="flex items-center space-x-4 mb-2">
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            720p
          </a>
          <input
            type="text"
            placeholder="Enter text"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            1080p
          </a>
          <input
            type="text"
            placeholder="Enter text"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
