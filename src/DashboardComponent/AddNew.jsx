import { React, useState } from 'react'
import DashboardNavbar from './DashboardNavbar'
import MovieForm from '../DashboardComponent/MovieForm';


const AddNew = () => {
  //fetch Data
  const [fetchData, setFetchData] = useState("");
  const [movieId, setMovieId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [screenshotsUrl, setScreenshotsUrl] = useState([]);
  const [storyLine, setStoryLine] = useState("");
  const [dl720p, set720p] = useState("");
  const [dl1080p, set1080p] = useState("");


  const uploadHandler = (e) => {
    e.preventDefault();
    // console.log(preparedData," Sent");
    if (!movieId || !title || !description || !avatarUrl || !screenshotsUrl || !storyLine || !dl720p || !dl1080p) {
      return;//something went wrong.
    }
    //preparing data to send DB
    const preparedData = {
      "id": movieId,
      "title": title,
      "description": description,
      "avatarUrl": avatarUrl,
      "screenshotsUrl": screenshotsUrl,
      "storyLine": storyLine,
      "720p": dl720p,
      "1080p": dl1080p
    }
    const db = async () => {
      try {
        const response = await fetch('/api/v2/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(preparedData)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Response from server:", result);
        //clearing fields
        setFetchData("");
        setMovieId("");
        setTitle("");
        setDescription("");
        setAvatarUrl("");
        setScreenshotsUrl([]);
        setStoryLine("");
        set720p("");
        set1080p("");
      } 
      catch (error) {
        console.error("Error sending data:");
      }
    }
    db();

  }
  return (
    <div className="w-full h-screen bg-[#857d7b] ">
      <DashboardNavbar />
      <div className="w-full h-[20vh] flex flex-row justify-around items-center text-[#dadada]  ">
        <h2 className="text-xl  capitalize font-semibold   ">new post</h2>
        <button onClick={uploadHandler} className="px-3 py-1 border-[1px] border-[#b3b0b0ae] rounded-md hover:bg-[#7a7878] capitalize ">
          upload
        </button>
      </div>
      <MovieForm
        fetchData={fetchData}
        setFetchData={setFetchData}
        movieId={movieId}
        setMovieId={setMovieId}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        avatarUrl={avatarUrl}
        setAvatarUrl={setAvatarUrl}
        setScreenshotsUrl={setScreenshotsUrl}
        storyLine={storyLine}
        setStoryLine={setStoryLine}
        dl720p={dl720p}
        set720p={set720p}
        dl1080p={dl1080p}
        set1080p={set1080p}
      />
    </div>
  );
}

export default AddNew