import React, { useState, useEffect } from "react";
import data from "./data/data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import "./App.css";
import ToDo from "./components/ToDo";



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

    /*const updateTodo = (id, newuserInput) => {
            let edit = [...toDoList];
            const editTask = {
                id: id,  
                task: newuserInput, 
                complete: false };
            edit = [...edit, editTask]; 
            setToDoList(edit);
            saveStateToLocalStorage(edit);*/

    const updateTodo = (id, {editTask}) => {
        const [newUserInput, changeUserInput] = useState("");    

        const edit = (e) => {
             changeUserInput(e.currentTarget.value);
        }; 

        const updateTodoLine = (e) => {
            e.preventDefault();
                if (newUserInput) {
                    editTask(newUserInput);
                } else {
                    alert("Input a valid task name");
                }
            changeUserInput("");
        };
            setToDoList(editTask);
            saveStateToLocalStorage(editTask);       

        return (
            <form onSubmit={updateTodoLine}>
        	    <input
          	    value={newUserInput}
          		type="text"
          		onChange={edit}
          		placeholder={id}
          		style={{
            		 borderRadius: "5px",
            		 backgroundColor: "#DBC4B7", 
                }}
                />
            </form>  
        );
    }

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

    return (
        <div className="App">
            <Header />
            <ToDoList
                toDoList={toDoList}
                handleToggle={handleToggle}
                handleFilter={handleFilter}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />

            <ToDoForm addTask={addTask} />
        </div>
    );
}

export default App
