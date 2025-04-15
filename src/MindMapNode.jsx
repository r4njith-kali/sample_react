import React from 'react';
import './App.css';

function MindMapNode({ idea, onDelete}) {
  return (
    <div className='mindmap_node'>
      {idea}
      <button className='delete_button' onClick={onDelete}>X</button>
    </div>
  )
}