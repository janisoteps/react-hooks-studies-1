import React, { useState } from "react";
import ActionButton from "./ActionButton";


const ToDo = ({ todo, handleToggle, deleteTodo, updateTask }) => {
	const [showEdit, setShowEdit] = useState(false)
	const [editInput, setEditInput] = useState(todo.task)

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setEditInput(newValue)
	}

	return (
      	<div
        	style={{
          		backgroundColor: "#F2E2DF",
          		color: "#252326",
				margin: "10px",
				borderRadius: "5px",
				boxShadow: "0 0 3px rgba(5,5,5,0.1)",
				
        	}}
      	>
			{showEdit ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between'
					}}
				>
					<input
						value={editInput}
						type="text"
						onChange={handleInputChange}
						// placeholder={todo.task}
						style={{
							borderRadius: "5px",
							backgroundColor: "#F2D1B3",
						}}
					/>


					<ActionButton 
							actionFunction={() => {
								updateTask(todo.id, editInput);
								setShowEdit(false);
							}}
							buttonText='save'
							buttonColor='#42f54b'
						/>
						<ActionButton 
							actionFunction={() => {
								setShowEdit(false);
							}}
							buttonText='cancel'
							buttonColor='#35d9db'
						/>

				</div>
			):(
				<div
					style={{
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
							buttonColor='#f56967'
						/>
						<ActionButton 
							actionFunction={() => {
								handleToggle(todo.id);
							}}
							buttonText='done'
							buttonColor='#42f54b'
						/>
						<ActionButton 
							actionFunction={() => {
								setShowEdit(true);
							}}
							buttonText='edit'
							buttonColor='#35d9db'
						/>
					</div>
				</div>
			)}
			
      	</div>
	
    );
};

export default ToDo;
