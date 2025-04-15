import React, { useState } from 'react';
import './App.css'
import MindMapNode from './MindMapNode2'

function App() {
    const [nodeLabel, setNodeLabel] = useState('True');
    const ideas = ["React", "Mind Maps", "AI", "Design"]



    return (
        <div>
            <h1>Hi</h1>
            <button onClick= {() => {ideas.map((idea,index) => (
                <div key={index} style={nodeStyle}>{idea}</div>
            )
            )}}>
                {nodeLabel}
            </button>
        </div>
    )
}

export default App;


