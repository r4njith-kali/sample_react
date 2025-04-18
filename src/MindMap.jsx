import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ForceGraph from './components/ForceGraph'; // adjust path if needed
import { v4 as uuidv4 } from 'uuid'; // optional, if you add nodes later


const MindMap = () => {
    const location = useLocation();
    const centralIdea = location.state?.centralIdea || 'Central Idea';
  
    const [nodes, setNodes] = useState([
        { id: 'root', label: centralIdea, fx: 1013, fy: 573 }, // Layer 0 (central idea)
        { id: 'A', label: 'Layer 1 - A' },                     // Layer 1
        { id: 'B', label: 'Layer 1 - B' },
        { id: 'C', label: 'Layer 1 - C' },
        { id: 'D', label: 'Layer 2 - D' },                     // Layer 2
        { id: 'E', label: 'Layer 2 - E' },
        { id: 'F', label: 'Layer 3 - F' },                     // Layer 3
      ]);
      
  
      const [links, setLinks] = useState([
        { source: 'root', target: 'A' },  // Layer 1
        { source: 'root', target: 'B' },
        { source: 'root', target: 'C' },
        { source: 'C', target: 'D' },     // Layer 2
        { source: 'C', target: 'E' },
        { source: 'D', target: 'F' }      // Layer 3
      ]);
      
  
    const assignNodeDepths = (nodes, links) => {
      const depthMap = { root: 0 };
      const visited = new Set(['root']);
      const queue = ['root'];
  
      while (queue.length > 0) {
        const current = queue.shift();
        const currentDepth = depthMap[current];
  
        links.forEach(link => {
          const neighbor = link.source === current ? link.target :
                           link.target === current ? link.source : null;
  
          if (neighbor && !visited.has(neighbor)) {
            visited.add(neighbor);
            depthMap[neighbor] = currentDepth + 1;
            queue.push(neighbor);
          }
        });
      }
  
      return depthMap;
    };
  
    // ✅ Now it's safe to use `nodes` and `links`
    const depthMap = assignNodeDepths(
      nodes.map(n => n.id),
      links.map(l => ({
        source: typeof l.source === 'object' ? l.source.id : l.source,
        target: typeof l.target === 'object' ? l.target.id : l.target
      }))
    );
  
    const [selectedNode, setSelectedNode] = useState(null);
    const [menuPos, setMenuPost] = useState({ x: 0, y: 0 });
  
    const handleNodeClick = (node, x, y) => {
      setSelectedNode(node);
      setMenuPost({ x, y });
    };
  
    return (
      <div style={{ position: 'relative' }}>
        <ForceGraph
          nodes={nodes}
          links={links}
          depthMap={depthMap}
          onNodeClick={handleNodeClick}
        />
      </div>
    );
  };
  
  export default MindMap;
  