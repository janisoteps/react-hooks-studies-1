import React from "react";

const ToDo = ({todo}) => {
  return (
    
    <div className = {todo.complete ? "strick" : ""}>
      {todo.task}
    </div>
  );
};
export default ToDo;