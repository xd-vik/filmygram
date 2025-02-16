import React, { useState } from "react";
import MovieDetails from './MovieDetails'

const Update = () => {
    //updation details
    const [movieId, setMovieId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [screenshotsUrl, setScreenshotsUrl] = useState([]);
    const [storyLine, setStoryLine] = useState("");
    const [dl720p, set720p] = useState("");
    const [dl1080p, set1080p] = useState("");

    //fetch data from DB
    const dbHandler = (e) => {
        e.preventDefault();
        // console.log("Fetch by ID clicked");
        if (!movieId) {
            console.log("Enter MovieId");
            return;
        }
        const fetching = async () => {
            try {
                //frontend and backend running on different port
                const response = await fetch(`http://localhost:3000/api/v2/edit?id=${movieId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },

                });

                if (!response.ok) {
                    throw new Error("Data is Not fetched")
                }

                const textResponse = await response.json();
                // console.log("Before upadate:", textResponse.userDetails._id);
                setMovieId(textResponse.userDetails?.id);
                setTitle(textResponse.userDetails?.title);
                setDescription(textResponse.userDetails?.description);
                setAvatarUrl(textResponse.userDetails?.avatarUrl);
                // setScreenshotsUrl(textResponse.userDetails?.screenshotsUrl);  //one by one changes may be later
                setStoryLine(textResponse.userDetails?.storyLine);
                set720p(textResponse.userDetails?.downloadLinks?.["720p"]);
                set1080p(textResponse.userDetails?.downloadLinks?.["1080p"]);

            } catch (error) {
                console.log("DB fetching data error:", error.message);
            }
        };
        fetching();

    }
    //updating data in DB
    const uploadHandler = (e) => {
        e.preventDefault();
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
                const response = await fetch('http://localhost:3000/api/v2/update', {
                    method: 'PUT',
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
        <>
            <MovieDetails
                titleText={"Update Movie Details"}
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
                uploadHandler={uploadHandler}
                dbHandler={dbHandler}
            />
        </>
    );
};

export default Update;