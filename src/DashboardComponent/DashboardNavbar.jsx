import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const DashboardNavbar = ( ) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // alert("logout clicked")
    Cookies.remove("authToken", { path: "/" });
    navigate("/");
  };
  return (
    <div className="w-full h-[10vh]  flex flex-row justify-between items-center px-10 py-4 text-[#dadada] relative">
      <span className="block font-bold italic text-xl tracking-wide">
        filmygram
      </span>
      <h1 className="capitalize text-2xl font-semibold ">admin dashboard</h1>
      <button onClick={handleLogout} className="px-4 py-2 border border-[#857d7b] rounded-full ">
        Logout
      </button>
    </div>
  );
};

export default DashboardNavbar;
