import React from "react";

const ToDo = ({ todo, handleToggle }) => {
    return (
      	<div
        	className={todo.complete ? "strick" : ""}
        	onClick={() => {
          	handleToggle(todo.id);
        	}}
        	style={{
          		backgroundColor: "#F2E2DF",
          		color: "#252326",
				margin: "10px",
				borderRadius: "5px",
				boxShadow: "0 0 3px rgba(5,5,5,0.1)"
        	}}
      	>
        	{todo.task}
      	</div>
    );
};

export default ToDo;
