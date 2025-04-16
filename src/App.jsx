import ForceGraph from './components/ForceGraph';

function App() {
  const nodes = [
    { id: '1', label: 'Central Idea' },
    { id: '2', label: 'Topic A' },
    { id: '3', label: 'Topic B' },
    { id: '4', label: 'Subtopic A1' },
    { id: '5', label: 'Subtopic A2' },
    { id: '6', label: 'Subtopic B1' },
    { id: '7', label: 'Topic C' },
    { id: '8', label: 'Topic D' },
    { id: '9', label: 'Detail A2-1' },
    { id: '10', label: 'Detail A2-2' },
    { id: '11', label: 'Topic E' },
    { id: '12', label: 'Crosslink Node' },
    { id: '13', label: 'Loopback Node' },
    { id: '14', label: 'Deep Nest' }
  ];

  const links = [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '7' },
    { source: '1', target: '8' },
    { source: '2', target: '4' },
    { source: '2', target: '5' },
    { source: '5', target: '9' },
    { source: '5', target: '10' },
    { source: '3', target: '6' },
    { source: '8', target: '11' },
    { source: '4', target: '12' },
    { source: '6', target: '12' }, // crosslink from different branches
    { source: '9', target: '13' },
    { source: '13', target: '2' }, // loopback to Topic A
    { source: '10', target: '14' },
    { source: '14', target: '12' }, // deep nested node pointing to common node
  ];


  return (
    <div>
      <h1>Force Mind Map</h1>
      <ForceGraph nodes={nodes} links={links} />
    </div>
  );
}

export default App;