import React, { useState } from "react";
import ActionButton from "./ActionButton";

const Update = ({toDoList, setTodo, editTodo, saveTodo}) => {
    
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
            //return task
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            {toDoList.map(item => (
                <div key ={item.id} >
                    {edit == item.id ?
                        <div>
                            <input value={value} 
                                   onChange = {(e) => setValue(e.target.value)} />
                        </div> :
                        <div>{item.task}</div>
                    }

                    {edit == item.id ?
                        <div>
                            <button onClick={ ()=> saveTodo(item.id)}>Save</button>
                        </div> :
                        <div><ActionButton /></div>
                    }
                </div>
            ))}
        </div>
    )

    
}
export default Update;
