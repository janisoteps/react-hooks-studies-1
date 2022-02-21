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
            />
            <button 
            style ={{
                backgroundColor: 'yellow',
                color: 'black',
                cursor: 'pointer',
                margin: '10px',
                fontWeight: 'bold',     
            }}
            type ='submit'>
                add
            </button>
        </form>
    );
};

export default ToDoForm;
