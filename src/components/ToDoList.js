import React from "react";
import ToDo from "./../components/ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div>
          {toDoList.map((todo) => {
            return (
              <ToDo
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                handleFilter={handleFilter}
              />
          );
        })}

        <button
            style={{
                margin: "20px",
                backgroundColor: "#733843",
                color: "black",
                cursor: "pointer",
                borderRadius:'5px'
              
            }}
            onClick={handleFilter}
        >
          Clear Completed
        </button>
      </div>
    );
};

export default ToDoList;
