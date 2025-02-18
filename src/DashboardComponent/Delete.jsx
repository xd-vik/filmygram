import React, { useState } from "react";
import ReadCard from "./ReadCard";

const Delete = () => {
    const [responseCheck, setResponseCheck] = useState("");
    const [responseDelete, setResponseDelete] = useState("");
    const [checkMovieId,setCheckMovieId]= useState("");
    const [deleteMovieId,setDeleteMovieId]= useState("");
    
    const handleCheck = (e) => {
        e.preventDefault();
        // console.log("Checked movie");
        if (!checkMovieId) {
            console.log("Enter MovieId");
            return;
        }
        const fetching = async () => {
            try {
                //frontend and backend running on different port
                const response = await fetch(`http://localhost:3000/api/v2/edit?id=${checkMovieId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },

                });

                if (!response.ok) {
                    throw new Error("Data is Not fetched")
                }

                let textResponse=await response.json();
 
                console.log("Before upadate:", textResponse);
                setResponseCheck(JSON.stringify(textResponse?.userDetails,null,2));
                
            } catch (error) {
                console.log("DB fetching data error:", error.message);
            }
        };
        fetching();
    };

    const handleDelete = (e) => {
        e.preventDefault();
        console.log("Deleted movie");
        if (!deleteMovieId) {
            console.log("Enter MovieId");
            return;
        }
        const fetching = async () => {
            try {
                //frontend and backend running on different port
                const response = await fetch(`http://localhost:3000/api/v2/remove`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({id:deleteMovieId})

                });

                if (!response.ok) {
                    console.log(response)
                    throw new Error("Data is Not fetched")
                }

                let textResponse=await response.json();
 
                console.log("Before upadate:", textResponse);
                setResponseDelete(JSON.stringify(textResponse?.message,null,2));
                
            } catch (error) {
                console.log("DB fetching data error:", error.message);
                setResponseDelete(error.message);
            }
        };
        fetching();
    };

    return (
        <div className="w-screen flex flex-col items-center bg-[#857d7b] p-4">
            <div className="w-[90%] mt-5 grid grid-cols-1 gap-4">
                <div className="flex flex-col md:flex-row items-center gap-5 w-full">
                    <ReadCard
                        titleText={"Check Movie"}
                        movieId={checkMovieId}
                        setMovieId={setCheckMovieId}
                        buttonName={"Check"}
                        handler={handleCheck}
                        response={responseCheck}
                    />
                    <ReadCard
                        titleText={"Delete A Movie"}
                        movieId={deleteMovieId}
                        setMovieId={setDeleteMovieId}
                        buttonName={"Delete"}
                        handler={handleDelete}
                        response={responseDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default Delete;
