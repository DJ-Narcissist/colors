import React from "react";
import { Link, useParams, Navigate } from "react-router-dom"


const ColorDetails = ({ colors }) => {
    const { color } = useParams();
    //Fetch color details or redirect if color doesn't exist

    const currentColor = colors.find((c) => c.name === color);

    if(!currentColor) {
        console.log(`Color "${color}" not found. Redireecting to /colors.`)
        //Redirect to the colors index page if color doesn't exist
        return (
            <div>
                <p>Color not found Redirecting to colors index.</p>

                <Navigate to="/colors" /> ;
            
            </div>
        );
    }
    return (
        <div>
            <h1>{currentColor.name} Details</h1>
            {}
            <div style={{ backgroundColor: currentColor.hex, width: "100px"}}>
            <p>
                <Link to={"/colors"}>Go Back</Link>
            </p>
            </div>
        </div>
    );
};

export default ColorDetails; 