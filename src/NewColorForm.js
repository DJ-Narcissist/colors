import React ,{useState} from "react";
import {  Navigate } from "react-router-dom";


const NewColorForm = (addColor) => {
    // Handle form submission and redirect to colors index
    const [form, updateForm] = useState({name:"", hex:"#ffffff"});
    

    const handleChange =(e) => {
        e.persist();
        updateForm ((f) => ({ ...f, [e.target.name]: e.target.value}));
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        console.log("Color added:", form);
        // Use the 'Navigate' component by returning it
       return <Navigate to={"/colors"} />;
    }

    const {hex,name} = form;

    return (
        <div className="NewColor">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color Name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter color"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div>
                <label htmlFor="hex">Color value</label>
                    <input
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <input type="Submit" value={"Add this color"} readOnly/>
            </form>
            
        </div>
    );
};

export default NewColorForm;