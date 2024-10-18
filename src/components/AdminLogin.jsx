import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNew from "../DashboardComponent/AddNew";

import Cookies from 'js-cookie';

const AdminLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: userId, password }),
      });

      const data = await response.json();
      // console.log(response);
      if (response.ok) {
        // Set cookie with the token
        Cookies.set("authToken", data.token, { expires: 1 }); // Expires in 1 day
        navigate(`/admin/${userId}/add-new`);
      } else {
        // alert(data.message || "Invalid credentials");
        console.log("Invalid details");
        setUserId("");  
        setPassword("");  
      }
    } catch (error) {
      console.error("Login error:", error);
      // alert("An error occurred. Please try again.");
      setUserId("");  
      setPassword("");  
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} method='POST' className="space-y-4">
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
