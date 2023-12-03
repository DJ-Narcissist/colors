import React from "react";
import { Link } from "react-router-dom";

const Color = ({hex, color, history}) => {
    // Check if hex is not available
    if(!hex) {
        console.log("Hex color is missing. Redirecting to /colors")
        history.push("/colors");
    }
    return (
        <div className="Color" style={{ backgroundColor: hex }} >
            {/* Display color info */}
            <p>This is {color}.</p>
            <p>Beautiful color, right?</p>
            {/* Provide link to go back to homepage */}
            <p>
                <Link to="/">Go back</Link>
            </p>
        </div>
    );
}

export default Color;