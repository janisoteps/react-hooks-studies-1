import './App.css';
import Header from "./components/Header";
import React from "react";

function App() {

    return (
        <div
            style={{
                width: '100vw',
                position: 'relative'
            }}
        >
            <Header />

            <div
                style={{
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                <h1>Hello</h1>
            </div>
        </div>
    );
}

export default App;
