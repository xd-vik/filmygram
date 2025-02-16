import React, {useState} from "react";
import Button from "./Button";
 
const MovieDetails = ({
    titleText,
    movieId, setMovieId, 
    title,setTitle, 
    description,setDescription, 
    avatarUrl, setAvatarUrl, 
    screenshotsUrl,setScreenshotsUrl, 
    storyLine,setStoryLine, 
    dl720p,set720p, 
    dl1080p,set1080p,
    uploadHandler,dbHandler
}) => {

    //Links
    const [link,setLink] = useState("");
    const insertImage = (e) =>{
        e.preventDefault();
        // console.log("inserted Images");
        if(!link) return;
        setScreenshotsUrl((prevLinks) => [...(prevLinks || []), link]);
        setLink("");
    }
    return (
        <div className="flex flex-col items-center justify-start w-screen bg-[#857d7b] p-5">
             
            <h1 className="text-3xl font-bold text-white mb-6">{titleText}</h1>

            <form className="p-8 rounded-lg shadow-md w-[90%] max-w-5xl space-y-4 border border-[#a2a1a1e9] bg-white">
                 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {/* Movie ID */}
                        <div>
                            <label className="block font-semibold mb-1">Movie ID</label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter Movie ID"
                                    value={movieId}
                                    onChange={(e)=> setMovieId(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                                />
                                <Button ButtonName="Fetch Data" handler={dbHandler} />
                            </div>
                        </div>

                        {/* Movie Title */}
                        <div>
                            <label className="block font-semibold mb-1">Movie Title</label>
                            <input
                                type="text"
                                placeholder="Enter Movie Title"
                                value={title}
                                onChange={(e)=> setTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        {/* Avatar URL */}
                        <div>
                            <label className="block font-semibold mb-1">Avatar URL</label>
                            <input
                                type="text"
                                placeholder="Avatar URL"
                                value={avatarUrl}
                                onChange={(e)=> setAvatarUrl(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        {/* Screenshots Image URL */}
                        <div>
                            <label className="block font-semibold mb-1">Image URL</label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter Image URL"
                                    value={link}
                                    onChange={(e)=> setLink(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                                />
                                <Button ButtonName="Insert Link" handler={insertImage} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {/* Movie Description */}
                        <div>
                            <label className="block font-semibold mb-1">Movie Description</label>
                            <textarea
                                placeholder="Enter Movie Description"
                                rows="5"
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500 resize-none"
                            ></textarea>
                        </div>

                        {/* Movie Storyline */}
                        <div>
                            <label className="block font-semibold mb-1">Movie Storyline</label>
                            <textarea
                                placeholder="Enter Movie Storyline"
                                rows="5"
                                value={storyLine}
                                onChange={(e)=> setStoryLine(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500 resize-none"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Download Links Section */}
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Download Links</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 720p Link */}
                        <div>
                            <label className="block font-semibold mb-1">720p Download Link</label>
                            <input
                                type="text"
                                placeholder="Enter 720p Link"
                                value={dl720p}
                                onChange={(e)=> set720p(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* 1080p Link */}
                        <div>
                            <label className="block font-semibold mb-1">1080p Download Link</label>
                            <input
                                type="text"
                                placeholder="Enter 1080p Link"
                                value={dl1080p}
                                onChange={(e)=> set1080p(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Update Button */}
                <Button ButtonName={"Upload"} handler={uploadHandler} center={true}/>
            </form>
        </div>
    );
};

export default MovieDetails;
