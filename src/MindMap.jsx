import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ForceGraph from './components/ForceGraph';
import { v4 as uuidv4 } from 'uuid';

const MindMap = () => {
    const location = useLocation();
    const centralIdea = location.state?.centralIdea || 'Central Idea';
    
    const [nodes, setNodes] = useState([
        { id: 'root', label: centralIdea, fx: 600, fy: 400 },
        { id: 'A', label: 'A' },
        { id: 'B', label: 'B' },
        { id: 'C', label: 'C' }
      ]);
      
      const [links, setLinks] = useState([
        { source: 'root', target: 'A' },
        { source: 'root', target: 'B' },
        { source: 'root', target: 'C' }
      ]);
      
    const [selectedNode, setSelectedNode] = useState(null);
    const [menuPos, setMenuPost] = useState({x:0,y:0});

    const handleNodeClick = (node, x, y) => {
        setSelectedNode(node);
        setMenuPos({ x, y });
    }

    return (
        <div style = {{ position: 'relative' }}>
            <ForceGraph
                nodes={nodes}
                links={links}
                onNodeClick={handleNodeClick}
            />
        </div>
    );
};

export default MindMap;
