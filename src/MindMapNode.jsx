import React from 'react';

function MindMapNode() {
    const nodeStyle = {
        border: '2px red',
        padding: '10px 10px',
        borderRadius: '5px',
        backgroundColor: 'white',
        margin: '10px',
        display: 'inline-block'
    };

    return (
        <div style = {nodeStyle}>
            I am a node!
        </div>
    );
}

export default MiniMapNode;