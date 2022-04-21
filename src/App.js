import React, { useState, useEffect } from "react";
import data from "./data/data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import "./App.css";



function App() {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        getStateFromLocalStorage();
    }, []); 

    const getStateFromLocalStorage = () =>{
        const statedata = localStorage.getItem('state');
        if(statedata !== undefined) {
            let parsedData = JSON.parse(statedata);
            if(Array.isArray(parsedData)) {
                setToDoList(parsedData);
            } else {
                setToDoList([]);
            } 
        }
    };

    const saveStateToLocalStorage = (taskList) => {
        localStorage.setItem('state', JSON.stringify(taskList));
    };

    const handleToggle = (id) => {
        const mapped = toDoList.map((task) => {
            if (task.id === id) {
                return { ...task, complete: !task.complete };
            } else {
                return { ...task };
            }
        });
        setToDoList(mapped);
        saveStateToLocalStorage(mapped);
    };

    const deleteTodo = (id) => {
        const clean = toDoList.filter((task) => {
            return task.id !== id
        });
        setToDoList(clean);
        saveStateToLocalStorage(clean);
    }; 

    const handleFilter = () => {
        let filtered = toDoList.filter((task) => {
            return !task.complete;
        });
        setToDoList(filtered);
    };

    const addTask = (userInput) => {
        let copy = [...toDoList];
        const newId = `${Math.random()}`;
        const newToDo = {
            id: newId,  
            task: userInput, 
            complete: false };
        copy = [...copy, newToDo];
        setToDoList(copy);
        saveStateToLocalStorage(copy);
    };

    const updateTask = (id, newText) => {
        
        const newTodoList = toDoList.map(task => {
            if (task.id === id) {
                let updatedTask = task;
                updatedTask.task = newText;

                return updatedTask
            } else {
                return task
            }
        });
        setToDoList(newTodoList);
        saveStateToLocalStorage(newTodoList);
    };

    return (
        <div className="App">
            <Header />
            <ToDoList
                toDoList={toDoList}
                handleToggle={handleToggle}
                handleFilter={handleFilter}
                deleteTodo={deleteTodo}
                updateTask={updateTask}
            />

            <ToDoForm addTask={addTask} />
        </div>
    );
}

export default App
