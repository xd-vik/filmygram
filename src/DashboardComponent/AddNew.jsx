import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import MovieForm from '../DashboardComponent/MovieForm';

const AddNew = () => {
  return (
    <div className="w-full h-screen bg-[#857d7b] ">
      <DashboardNavbar  />
      <div className="w-full h-[20vh] flex flex-row justify-around items-center text-[#dadada]  ">
        <h2 className="text-xl  capitalize font-semibold   ">new post</h2>
        <button className="px-3 py-1 border-[1px] border-[#b3b0b0ae] rounded-md hover:bg-[#7a7878] capitalize ">
          upload
        </button>
      </div>
      <MovieForm />
    </div>
  );
}

export default AddNew