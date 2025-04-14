import './App.css';

function App() {
  const nodeLabel = "Idea";
  const nodeStyle = {
    border: '2px solid blue',
    padding: '10px 20px',
    borderRadius: '8px',
    display: 'inline-block',
    backgroundColor: 'lightblue'
  };

  return (
    <div className = "App">
      <h1>My MindMap</h1>
      <div style = {nodeStyle}>
        {nodeLabel}
      </div>
      <p>Let's start building {2+2}</p>
    </div>
  );
}

export default App;