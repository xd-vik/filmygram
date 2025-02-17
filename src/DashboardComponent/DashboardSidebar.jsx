import React from "react";
import addNew from './AddNew';

const DashboardSidebar = () => {
  return (
    <div className="w-[15%] h-[90vh] bg-[#4b4948] text-white p-8   shadow-lg absolute">
      <h2 className="text-2xl mb-5 border-b-2 border-gray-600 pb-2">Profile</h2>
      <ul>
        <li className="mb-3">
          <a
            href="panel/add-new"
            className="hover:underline hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Add New
          </a>
        </li>
        <li className="mb-3">
          <a
            href="panel/update"
            className="hover:underline hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Update
          </a>
        </li>
        <li className="mb-3">
          <a
            href="panel/delete"
            className="hover:underline hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Delete
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
