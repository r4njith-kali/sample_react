import React, { useState } from 'react';
import './App.css'
import MindMapNode from './MindMapNode2'

function App() {
    const [nodeLabel, setNodeLabel] = useState('True');

    return (
        <div>
            <h1>Hi</h1>
            <button onClick= {() => setNodeLabel("Updated Idea")}>
                Rename
            </button>
        </div>
    )
}

export default App;


