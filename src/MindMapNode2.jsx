import React from 'react';

function MindMapNode(props) {
  const nodeStyle = {
    border: '2px solid green',
    padding: '10px 10px',
    borderRadius: '5px',
    backgroundColor: 'blue',
    color: 'white',              // Optional: makes text readable on blue
    margin: '10px',
    display: 'inline-block',
    textAlign: 'center',
  };

  return (
    <div style={nodeStyle}>
      {props.label}
    </div>
  );
}

export default MindMapNode;
