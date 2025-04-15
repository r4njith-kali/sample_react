import './App.css';
import React, { useState } from 'react';
import MindMapNode from './MindMapNode2';

function App() {
    const ideas = ["React", "MindMap", "UI", "Design"];
    const [nodes, setNodes] = useState([]);
    const [nodeLabel, setNodeLabel] = useState("Show ideas");

    const nodeStyle = {
        border: '2px solid blue',
        padding: '10px 10px',
        borderRadius: '8px',
        backgroundColor: 'lightblue',
        margin: '10px',
        display: 'inline-block'
    };

    const handleClick = () => {
        const generatedNodes = ideas.map((idea,index) => (
            <div key={index} style={nodeStyle}>{idea}</div>
        ));
        setNodes(generatedNodes);
        setNodeLabel("Ideas shown:");
    };

    return (
        <div>
            <h1>Hi</h1>
            <button onClick={handleClick}>
                {nodeLabel}
            </button>

            <div style={{ marginTop: '20px' }}>
                {nodes}
            </div>
        </div>
    );
}

export default App;