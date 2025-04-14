import React, { useState } from 'react';

function App() {
  const nodeStyle = {
    border: '3px solid blue',
    padding: '10px 10px',
    borderRadius: '10px',
    display: 'inline-block',
    backgroundColor: 'white',
    margin: '10px',
    textAlign: 'center', // ✅ this
    minWidth: '100px'     // optional for better shape
  };
  

  const [nodeLabel, setNodeLabel] = useState('True');

  const toggleLabel = () => {
    setNodeLabel((prevLabel) =>
      prevLabel === 'True' ? 'False' : 'True'
    );
  };

  return (
    <div className="App" style={{ border: '4px solid green' }}>
      <h1>My MindMap!</h1>
      <div style={{ ...nodeStyle, fontSize: '24px' }}>
        {nodeLabel}
      </div>
      <br />
      <button onClick={toggleLabel}>Toggle Button</button>
      <p>Good job</p>
    </div>
  );
  
}

export default App;