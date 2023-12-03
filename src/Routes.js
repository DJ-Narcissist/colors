import React, { useEffect, useState } from "react";
import { Route, Navigate, BrowserRouter as Router, Routes } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

const ColorRoutes = () => {
    // REtrieve colors form local storage or use default colors
    const intialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        blue:"#0000FF",
        green: "#00FF00"
    };
    // State to manage colors
    const [colors, updateColors] = useState(intialColors);

    // UPdate localStorage whenever colors change
    useEffect(() => {
        localStorage.getItem("colors", JSON.stringify(colors));
        console.log("Colors updated", colors);
    }, [colors]);

    
    
  return (
    <Router>
        <Routes>
            {/* Route for displaying the list of colors */}
        <Route exact path="/colors">
            <ColorList />
        </Route>
        {/* Route for displaying details of a specific color */}
        <Route exact path="/colors/:color">
            <ColorDetails  colors={colors}/>
        </Route>
        {/* Route for adding a new color */}
        <Route exact path="/colors/new">
            <NewColorForm updateColors = {updateColors} />
        </Route>
        {/* Default Route */}
        <Navigate to="/colors" />
        </Routes>
    </Router>
  );
};

export default ColorRoutes;
