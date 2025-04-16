import ForceGraph from './components/ForceGraph';

function App() {
  const nodes = [
    { id: '1', label: 'Central' },
    { id: '2', label: 'Branch A' },
    { id: '3', label: 'Branch B' },
    { id: '4', label: 'Branch c' },
    { id: '5', label: 'Branch d' },
    { id: '6', label: 'Branch e' },
    { id: '7', label: 'Branch f' },
    { id: '8', label: 'Branch g' },
    { id: '9', label: 'Branch h' }
    { id: '10', label: 'Branch i'}
  ];

  const links = [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '4' },
    { source: '1', target: '5' },
    { source: '1', target: '6' },
    { source: '4', target: '7' },
    { source: '4', target: '8' },
    { source: '8', target: '9' },
    { source: '9', target: '10'}
  ];

  return (
    <div>
      <h1>Force Mind Map</h1>
      <ForceGraph nodes={nodes} links={links} />
    </div>
  );
}

export default App;