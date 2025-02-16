import React, { useState } from "react";
import Button from "./Button";

const MovieForm = ({
  fetchData,setFetchData,
  movieId, setMovieId, 
  title,setTitle, 
  description,setDescription, 
  avatarUrl, setAvatarUrl, 
  screenshotsUrl,setScreenshotsUrl, 
  storyLine,setStoryLine, 
  dl720p,set720p, 
  dl1080p,set1080p 
}) => {

  //Fetching data from TMDB API
  const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWQ0ZWE0Y2MyMDllMjg0YzEyNTdmN2ViNzg3YTNkNCIsIm5iZiI6MTcyODk4OTg3Mi4zMTQsInN1YiI6IjY3MGU0YWIwOWYzNTMxZTZiMjZjNjVhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DGEwwSAp0hU0bhN-qyYbYCRDBySXOG6q5a5TH8REjyU';
  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWQ0ZWE0Y2MyMDllMjg0YzEyNTdmN2ViNzg3YTNkNCIsIm5iZiI6MTcyODk4OTg3Mi4zMTQsInN1YiI6IjY3MGU0YWIwOWYzNTMxZTZiMjZjNjVhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DGEwwSAp0hU0bhN-qyYbYCRDBySXOG6q5a5TH8REjyU'
    }
  };
  const fetchHandler = async (e) => {
    e.preventDefault();
    // console.log("clicked")
    if(!movieId) return;
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}`;
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log('Movie Data;:', data);
      setFetchData(data);
      setTitle(data.title);
      setStoryLine(data.overview);

    } catch (error) {
      console.error('Error fetching movie data:');
    }
  }

  //ss link handler
  const [link,setLink] = useState("");
  const linkHandler = (e) => {
    e.preventDefault();
    // console.log("Link handler Clicked");
    if(!link) return;
    setScreenshotsUrl((prevLinks)=>[...(prevLinks || []),link] )
    setLink("");
  }
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-[#857d7b] mb-5 ">
      <form className=" p-8 rounded-lg shadow-md w-full max-w-md space-y-4 border border-[#a2a1a1e9] mt-[-10rem]">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Movie Id"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <Button
            ButtonName={"Fetch Data"}
            handler={fetchHandler}
          ></Button>
        </div>
        <input
          type="text"
          placeholder="Enter Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Avatar Url"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Movie Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Enter Movie Storyline"
          value={storyLine}
          onChange={(e) => setStoryLine(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Image URL"
            value={link}
            onChange={(e)=>setLink(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <Button
            ButtonName={"Insert Link"}
            handler={linkHandler}
          ></Button>
        </div>

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
            value={dl720p}
            onChange={(e) => set720p(e.target.value)}
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
            value={dl1080p}
            onChange={(e) => set1080p(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
