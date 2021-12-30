import React from "react";

export default function Header(props) {
    const imagePath = 'https://picsum.photos/800/300';

    return (
        <div
            style={{
                width: '100vw',
                backgroundColor: 'red'
            }}
        >
            <img
                src={imagePath}
                alt="Header image"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
        </div>
    )
}
