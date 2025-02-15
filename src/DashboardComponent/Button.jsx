import React from "react"

const Button =({ButtonName,handler}) => {
    return (
        <>
            <button onClick={handler} className="px-4 py-1 border border-[#747474] font-bold rounded-md bg-[#2563eb] text-[#dadada] text-sm ">
                {ButtonName}
            </button>
        </>
    );
}

export default Button;
