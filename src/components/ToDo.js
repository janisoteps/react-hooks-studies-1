import React from "react";
import ActionButton from "./ActionButton";


const ToDo = ({ todo, handleToggle, deleteTodo, updateTodo }) => {
	return (
      	<div
        	style={{
          		backgroundColor: "#F2E2DF",
          		color: "#252326",
				margin: "10px",
				borderRadius: "5px",
				boxShadow: "0 0 3px rgba(5,5,5,0.1)",
				display: 'flex',
				justifyContent: 'space-between'
        	}}
      	>
			<div
				style={{
					minWidth: '500px'
				}}
				className={todo.complete ? "strick" : ""}
			>
				{todo.task}
			</div>
        	
			<div
				style={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<ActionButton
					actionFunction={() => {
						deleteTodo(todo.id)
					}}
					buttonText='delete'
					buttonColor='#D9A384'
				/>
				<ActionButton 
					actionFunction={() => {
						handleToggle(todo.id);
					}}
					buttonText='done'
					buttonColor='#D9BEB4'
				/>
				<ActionButton 
					actionFunction={() => {
						updateTodo(todo.id);
					}}
					buttonText='change'
					buttonColor='#f2d8c2'
					type="submit"
				/>
			</div>
      	</div>
	
    );
};

export default ToDo;
