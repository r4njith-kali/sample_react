import React, { useState } from 'react';

function App() {
  const nodeStyle = {
    border: '3px solid blue',
    padding: '10px 10px',
    borderRadius: '10px',
    display: 'inline-block',
    backgroundColor: 'white',
    margin: '10px'
  };

  const [nodeLabel, setNodeLabel] = useState('True');

  const toggleLabel = () => {
    setNodeLabel((prevLabel) =>
      prevLabel === 'True' ? 'False' : 'True'
    );
  };

  return (
    <div className = "App">
      <h1>My MindMap!</h1>
      <div style = {nodeStyle}>
        {nodeLabel}
      </div>
      <br />
      <button onClick = {toggleLabel}>
        Toggle Button
      </button>
      <p>Good job</p>
    </div>
  );
}

export default App;