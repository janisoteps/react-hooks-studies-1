import React, { useState } from "react";
import data from './data.json';
//components
import Header from './header';
import ToDoList from "./ToDoList";

import './App.css';

function App() {
    const [ toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id == id ? {...task, complete: !task.complete} : {...task};
        });
        setToDoList(mapped);
    };


    return (
        <div className = 'App'>
           <Header />
           <ToDoList toDoList = {toDoList}/>
        </div>
        
    );


}

export default App;