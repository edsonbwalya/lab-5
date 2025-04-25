import { useState } from 'react';
import './App.css';

function Task({ name }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Productivity Task</h1>
      <h2>{name}</h2>
      <p>Status: <strong style={{ color: isDone ? 'green' : 'red' }}>{isDone ? 'Done ' : 'Not Done'}</strong></p>
      <button onClick={() => setIsDone(!isDone)} style={{ marginTop: '20px', padding: '10px 20px' }}>
        {isDone ? 'Mark as Not Done' : 'Mark as Done'}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Task name="Complete Lab 5 Submission" />
    </div>
  );
}

export default App;
