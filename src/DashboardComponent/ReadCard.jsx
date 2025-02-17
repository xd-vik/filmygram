import React from "react";
import Button from './Button'

const ReadCard = ({
    titleText,
    movieId, setMovieId,
    buttonName, handler,
    response
}) => {
    return (
        <>
            <div className="w-full p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
                <div className="flex flex-col w-full gap-4 mb-5">
                    <h1 className="text-gray-800 text-xl font-semibold text-center mb-4">{titleText}</h1>
                    <div className="flex flex-row w-full gap-4">
                        <input
                            type="text"
                            value={movieId}
                            onChange={(e) => setMovieId(e.target.value)}
                            placeholder="Enter item"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <Button
                            ButtonName={buttonName}
                            handler={handler}
                            center={true}
                        />
                    </div>
                </div>

                <div className="w-full p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
                    <textarea
                        value={response}
                        placeholder="Response"
                        readOnly
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none h-24"
                    />
                </div>
            </div>


        </>
    )
}

export default ReadCard;