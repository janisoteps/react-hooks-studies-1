import React, { useState } from "react";



const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
            if (userInput) {
                addTask(userInput);
            } else {
                alert("Input a valid task name");
            }
        setUserInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
        	<input
          	    value={userInput}
          		type="text"
          		onChange={handleChange}
          		placeholder="Enter task..."
          		style={{
            		borderRadius: "5px",
            		backgroundColor: "#DBC4B7",
          	    }}
        />
        	<button
          		style={{
            		backgroundColor: "#F2D8C2",
            		color: "black",
            		borderRadius: "5px",
            		cursor: "pointer",
            		margin: "10px",
          		}}
          		type="submit"
        	>
          	add
        	</button>
        </form>
    );
};

export default ToDoForm;
