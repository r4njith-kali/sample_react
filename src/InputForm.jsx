import React from 'react';

function InputForm({ newIdea, setNewIdea, addIdea}) {
    return (
        <>
            <input
            value={newIdea}
            onChange={(e) => setNewIdea(e.target.value)}
            placeholder='New Idea?'
            />

            <button
                onClick={addIdea}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'pink'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'blue'}
            >
                Add idea
            </button>
        </>
    );
}

export default InputForm;