import DashboardNavbar from "../DashboardComponent/DashboardNavbar";
import DashboardSidebar from "../DashboardComponent/DashboardSidebar";
import { Outlet } from "react-router-dom"; 

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen bg-[#4b4948] relative ">
      <DashboardNavbar />
      <DashboardSidebar />
      <Outlet />
      {/* <h1>Welcome, Admin {userID}</h1> */}
      {/* <p>This is a protected page.</p> */}
      <div className="w-[85%] absolute left-[15%] h-[90vh] overflow-hidden text-[#c3c0bf] ">
        <h1 className="absolute left-[25%] top-[7%] font-bold text-[8vh]">
          Admin Dashboard
        </h1>
        <div className="absolute top-[25%] left-[15%]">
          <h3 className="text-xl mb-4 border-b-2 border-gray-600 pb-2">
            Your Recent Posts
          </h3>
          <p className="text-gray-300 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <h3 className="text-xl mb-4 border-b-2 border-gray-600 pb-2">
            Write a Query
          </h3>
          <input
            type="text"
            placeholder="Type your query here..."
            className="w-[30vw] h-[20vh]  p-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500  "
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
