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
            		backgroundColor: "#F2D1B3",
          	    }}
        	/>
        	<button
          		style={{
            		backgroundColor: "#733843",
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
