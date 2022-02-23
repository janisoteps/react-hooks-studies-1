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
        	}}
      	>
        	{todo.task}
      	</div>
    );
};

export default ToDo;
