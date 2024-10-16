import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();   
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userid,password);
    
      const res = await fetch("/api/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userid,
          password
             
        })
      })
    if(res.ok){
      console.log("Correct user")
      navigate(`/admin/${userid}`);
    }
    else{
      console.log("Wrong details")
      setUserId("");   
      setPassword("");  
    }
    // console.log(res)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} method='post' className="space-y-4">
          <input
            type="text"
            placeholder="User ID"
            value={userid}
            name="userId"
            onChange={(e) => setUserId(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
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

export default AdminLogin;
