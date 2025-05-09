import React from "react";

const CurrentDate = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // e.g., "5/3/2025"

    return (
        <div>
            <p>{formattedDate}</p>
        </div>
    );
};

export default CurrentDate;