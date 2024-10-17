import React from "react";

const DashboardNavbar = () => {
  return (
    <div className="w-full h-[10vh]  flex flex-row justify-between items-center px-10 py-4 text-[#dadada] relative">
      <span className="block font-bold italic text-xl tracking-wide">
        filmygram
      </span>
      <h1 className="capitalize text-2xl font-semibold ">admin dashboard</h1>
      <button className="px-4 py-2 border border-[#857d7b] rounded-full ">
        Logout
      </button>
    </div>
  );
};

export default DashboardNavbar;
