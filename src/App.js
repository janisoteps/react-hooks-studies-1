import React, { useState } from "react";
import data from './data/data.json';
//components
import Header from './components/header';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

import './App.css';

function App() {
    const [ toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
             if (task.id===id) {
                 return {...task, complete: !task.complete}
             } else {
                 return {...task};
             }
        });
        setToDoList(mapped);
    };

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false}];
        setToDoList(copy);
    }


    return (
        <div className = 'App'>
           <Header />
           <ToDoList 
           toDoList = {toDoList}
           handleToggle = {handleToggle}
           handleFilter={handleFilter}
           />
           <ToDoForm 
           addTask={addTask}/>
        </div>
        
    );


}

export default App;