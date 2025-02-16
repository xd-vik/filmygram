import React from "react";

const Button = ({ ButtonName, handler, center = false }) => {
    return (
        <div className={center ? "flex justify-center" : ""}>
            <button 
                onClick={handler} 
                className="px-4 py-1 border border-[#747474] font-bold rounded-md bg-[#2563eb] text-[#dadada] text-sm"
            >
                {ButtonName}
            </button>
        </div>
    );
};

export default Button;
