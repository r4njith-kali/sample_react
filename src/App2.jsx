import './App.css';
import React, { useState } from 'react';

function App() {
    const [newIdea, setNewIdea] = useState("");
    const [ideas, setIdeas] = useState([]);

    return (
        <div>
            <input 
                value = {newIdea}
                onChange={(e) => setNewIdea(e.target.value)}
                placeholder='New idea?'
            />

            <button onClick={() => {
                setIdeas([...ideas, newIdea]);
                setNewIdea("");
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'pink'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'blue'}
            >
              Add idea
            </button>

            <div>
                {ideas.map((idea,index) => (
                    <div key={index} className='mindmap_node'>
                        {idea}
                        <button className='delete_button' onClick={() => {
                            const updated = [...ideas];
                            updated.splice(index,1);
                            setIdeas(updated);
                        }}> X </button>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default App;
