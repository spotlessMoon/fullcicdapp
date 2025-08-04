import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [fastapiData, setFastapiData] = useState(null);
  const [nodeData, setNodeData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8001/api/message')
      .then(res => setFastapiData(res.data))
      .catch(err => console.error("FastAPI error:", err));

    axios.get('http://localhost:8002/api/message')
      .then(res => setNodeData(res.data))
      .catch(err => console.error("Node.js error:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Microservices Frontend</h1>

      <h2>FastAPI Response:</h2>
      <pre>{JSON.stringify(fastapiData, null, 2)}</pre>

      <h2>Node.js Response:</h2>
      <pre>{JSON.stringify(nodeData, null, 2)}</pre>
    </div>
  );
}

export default App;
