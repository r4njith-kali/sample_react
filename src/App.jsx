import './App.css';
import React, { useState } from 'react';
import MindMapNode from './MindMapNode2';

function App() {
  const nodeStyle = {
    border: '2px solid blue',
    padding: '10px 10px',
    borderRadius: '8px',
    backgroundColor: 'lightblue',
    margin: '10px',
    display: 'inline-block'
  };

  const [newIdea, setNewIdea] = useState("");
  const [ideas, setIdeas] = useState([]);

  return (
    <div>
      <input 
        value={newIdea}
        onChange={(e) => setNewIdea(e.target.value)}
        placeholder="New Idea?"
      />

      <button onClick={() => {
        setIdeas([...ideas, newIdea]);
        setNewIdea("");
      }}>
        Add Idea
      </button>

      <div style={{ marginTop: '20px' }}>
        {ideas.map((idea, index) => (
          <div key={index} style={nodeStyle}>
            {idea}
          </div>
        ))}
      </div>

      <button onClick={() => setIdeas([])}
        style={{
          ...nodeStyle,
          transition: 'all 0.25s ease-in-out',
          backgroundColor: 'blue',
          color: 'white',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'blue'}

        >Reset MindMap</button>
    </div>
  );
}

export default App;
