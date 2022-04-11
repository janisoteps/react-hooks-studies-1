import React from "react";
import ToDo from "./../components/ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter, deleteTodo }) => {
    return (
        <div
            style={{
              	maxWidth: "700px",
              	margin: "auto",
            }}>
            {toDoList.map((todo) => {
              	return (
                	<ToDo
                    	key={todo.id}
                    	todo={todo}
                    	handleToggle={handleToggle}
                    	handleFilter={handleFilter}
                    	deleteTodo={deleteTodo}
                        //updateTodo={updateTodo}
                	/>
          		);
        })}

            <button
                onClick={handleFilter}
                style={{
                    margin: "20px",
                    backgroundColor: "#F2D8C2",
                    color: "black",
                    cursor: "pointer",
                    borderRadius:'5px'
              
                }}
            >
              Clear Completed
            </button>
      </div>
    );
};

export default ToDoList;
