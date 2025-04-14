// src/MindMapNode.jsx
import React from 'react'; // Import React (often optional now with Vite/modern setups, but good practice)

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

  return (
    <div style={nodeStyle}>
      I am a Node!
    </div>
  );
}

export default MindMapNode; // Export for use elsewhere