import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ForceGraph from './component/ForceGraph';
import { v4 as uuidv4 } from 'uuid';

const MindMap = () => {
    const location = useLocation();
    const centralIdea = location.state?.centralIdea || 'Central Idea';
    
    const [nodes, setNodes] = useState([{ id: 'root', label: centralIdea}]);
    const [links, setLinks] = useState([]);
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
