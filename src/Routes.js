import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

const ColorRoutes = () => {
    // Retrieve colors from local storage or use default colors
    const storedColors = localStorage.getItem("colors");
    const initialColors = storedColors ? JSON.parse(storedColors) : {
        red: "#FF0000",
        blue: "#0000FF",
        green: "#00FF00"
    };
    
    // State to manage colors
    const [colors, updateColors] = useState(initialColors);

    // Update localStorage whenever colors change
    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colors));
        console.log("Colors updated", colors);
    }, [colors]);

    return (
        <Router>
            <Routes>
                {/* Route for displaying the list of colors */}
                <Route exact path="/colors">
                    <ColorList colors={colors} />
                </Route>
                {/* Route for displaying details of a specific color */}
                <Route exact path="/colors/:color">
                    <ColorDetails colors={colors} />
                </Route>
                {/* Route for adding a new color */}
                <Route exact path="/colors/new">
                    <NewColorForm updateColors={updateColors} />
                </Route>
                {/* Default Route */}
                <Navigate to="/colors" />
            </Routes>
        </Router>
    );
};

export default ColorRoutes;
