//import React from 'react';

import './App.css'

function App() {
  return (
    <div className = "App">
      <header>
        <h1>Hi Dev!</h1>
      </header>
      <main> 
        <h2>Hello! Select an option</h2> 
        <select>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <input type = 'text' placeholder='Enter a text' />
        </select>
      </main>
      <footer>
        by ranjith
      </footer>
    </div>
  )
}

export default App;