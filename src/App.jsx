// src/App.jsx
import './App.css';
import MindMapNode from './MindMapNode2'; // Import the component


function App() {
  return (
    <div className="App">
      <h1>My Mind Map</h1>

      <MindMapNode label="Haha" color = "blue"/>
      <MindMapNode label = "lol" color = "red"/>
      <MindMapNode label = "branch2"/>

    </div>
  );
}

export default App;