import React, { useState } from "react";

const Update = ({toDoList, setTodo}) => {
    
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState ('')

    function editTodo (id, task){
        setEdit(id)
        setValue(task)
    }

    function saveTodo(id){
        let newTodo = [...toDoList].map(item => {
            if(item.id == id){
                item.task = value
            }
            return task
        })
        setTodo(newTodo)
        setEdit(null)
    }

    
}
export default Update;
