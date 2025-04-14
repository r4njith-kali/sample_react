// src/App.jsx
import './App.css';
import MindMapNode from './MindMapNode'; // Import the component


function App() {
  return (
    <div className="App">
      <h1>My Mind Map</h1>
      {/* Use the component like an HTML tag */}
      <MindMapNode />
      <MindMapNode /> {/* You can reuse it easily */}
    </div>
  );
}

export default App;