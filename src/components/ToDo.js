import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  return (
    <div
      className={todo.complete ? "strick" : ""}
      onClick={() => {
        handleToggle(todo.id);
      }}
    >
      {todo.task}
    </div>
  );

}
export default ToDo;

