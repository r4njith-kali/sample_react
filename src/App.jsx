import ForceGraph from './components/ForceGraph';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [nodes, setNodes] = useState([
    { id: '1', label: 'Central Idea'},
    { id: '2', label: 'Topic A'},
    { id: '3', label: 'Topic B'}
  ])

  const [links, setLinks] = useState([
    { source: '1', target: '2' },
    { source: '1', target: '3' }
  ]);

  const [idea,setIdea] = useState('');

  const handleAddNode = () => {
    if (!idea.trim()) return;
  }

  const newId = uuidv4();
  const newNode = { id: newId, label: idea.trim() };
  const newLink = { source: '1', target: newId };

  setNodes(prev => [...prev, newNode]);
  setLinks(prev => [...prev, newLink]);
  setIdea('');


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Force Mind Map</h1>

      <input 
        type="text"
        value={idea}
        onChange = {(e) => setIdea(e.target.value)}
        placeholder = "Enter a new idea..."
        style = { {padding: '8px', marginRight: '10px', wifth: '250px' }}
      />

      <button onClick={handleAddNode} style={{padding: '8px 12px'}}>
        Add Node
      </button>


      <ForceGraph nodes={nodes} links={links} />
    </div>
  );
}

export default App;