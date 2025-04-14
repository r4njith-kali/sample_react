// src/MindMapNode.jsx
import React, { useState } from 'react';


// A simple functional component
function MindMapNode() {
  const nodeStyle = {
    border: '2px solid green',
    padding: '8px 15px',
    borderRadius: '5px',
    backgroundColor: 'lightgreen',
    margin: '10px', // Add some margin for spacing
    display: 'inline-block',
  };

  const [NodeLabel, setNodeLabel] = useState('True');

  const toggleLabel = () => {
    setNodeLabel((prevLabel) => 
        prevLabel === 'True' ? 'False' : 'True'
    );
  };

  return (
    <div>
        <button style = {nodeStyle} onClick={toggleLabel}>
            {NodeLabel}
        </button>
    </div>
  );
}

export default MindMapNode; // Export for use elsewhere