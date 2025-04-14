import React from 'react';

function MindMapNode(props) {

    const nodeStyle = {
        border: '2px green',
        padding: '10px 10px',
        borderRadius: '5px',
        backgroundColor: 'blue',
        margin: '10px',
        display: 'inline-block'
    };

    return (
        <div style = {nodeStyle}>
            {props.label}
        </div>
    );
}

export default MindMapNode;