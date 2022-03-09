import React from "react"

const ActionButton = ({actionFunction, buttonText, buttonColor}) => {
    
    return (
        <button
            onClick={actionFunction}
            style ={{
                padding: "5px",
                borderWidth: "0px",
                backgroundColor: buttonColor,
                cursor: "pointer",
                borderRadius: '10px',
                margin: '5px'
            }}
        >
            {buttonText}
        </button>
    )
};

export default ActionButton;
