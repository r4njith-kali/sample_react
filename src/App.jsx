import './App.css';
import React, { useState } from 'react';
import InputForm from './InputForm';
import MindMapNode from './MindMapNode';

function App() {
    const [newIdea, setNewIdea] = useState("");
    const [ideas, setIdeas] = useState([]);

    const addIdea = () => {
        if (newIdea.trim !== "") {
            setIdeas([...ideas, newIdea]);
            setNewIdea("");
        }
    };

    const deleteIdea = (index) => {
        const updated = [...ideas];
        updated.splice(index,1);
        setIdeas(updated);
    };

    return (
        <div>
            <InputForm
                newIdea={newIdea}
                setNewIdea={setNewIdea}
                addIdeas={addIdea}
            />

            <div>
                {ideas.map((idea,index) => (
                    <MindMapNode
                        key={index}
                        idea={idea}
                        onDelete={() => deleteIdea(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;