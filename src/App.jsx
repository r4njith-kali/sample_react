import React, { useState } from 'react';
import ForceGraph from './components/ForceGraph';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [nodes, setNodes] = useState([
    { id: '1', label: 'Central Idea' },
    { id: '2', label: 'Topic A' },
    { id: '3', label: 'Topic B' }
  ]);
  const [links, setLinks] = useState([
    { source: '1', target: '2' },
    { source: '1', target: '3' }
  ]);
  const [idea, setIdea] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

  const handleAddNode = () => {
    if (!idea.trim()) return;

    const newId = uuidv4();
    const newNode = { id: newId, label: idea.trim() };
    const newLink = { source: '1', target: newId };

    setNodes(prev => [...prev, newNode]);
    setLinks(prev => [...prev, newLink]);
    setIdea('');
  };

  const handleNodeClick = (node, x, y) => {
    setSelectedNode(node);
    setMenuPos({ x, y });
  };

  const handleDelete = () => {
    if (!selectedNode) return;
    setNodes(prev => prev.filter(n => n.id !== selectedNode.id));
    setLinks(prev => prev.filter(l => l.source !== selectedNode.id && l.target !== selectedNode.id));
    setSelectedNode(null);
  };

  const handleRename = () => {
    const newLabel = prompt("Enter new label:", selectedNode.label);
    if (newLabel) {
      setNodes(prev => prev.map(n => n.id === selectedNode.id ? { ...n, label: newLabel } : n));
    }
    setSelectedNode(null);
  };

  const handleMakeMain = () => {
    const newMainId = selectedNode.id;
    const newLinks = nodes
      .filter(n => n.id !== newMainId)
      .map(n => ({ source: newMainId, target: n.id }));
    setLinks(newLinks);
    setSelectedNode(null);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Interactive Mind Map</h1>

      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter a new idea..."
        style={{ padding: '8px', marginRight: '10px', width: '250px' }}
      />
      <button onClick={handleAddNode} style={{ padding: '8px 12px' }}>
        Add Node
      </button>

      <ForceGraph nodes={nodes} links={links} onNodeClick={handleNodeClick} />

      {selectedNode && (
        <div
          style={{
            position: 'absolute',
            top: menuPos.y,
            left: menuPos.x,
            background: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            zIndex: 10
          }}
        >
          <p><strong>{selectedNode.label}</strong></p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleRename}>Rename</button>
          <button onClick={handleMakeMain}>Make Main Idea</button>
          <br />
          <button onClick={() => setSelectedNode(null)} style={{ marginTop: '5px' }}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
