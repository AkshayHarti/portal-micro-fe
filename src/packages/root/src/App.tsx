import './App.css';

function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Root App</h1>
      <nav>
        <ul>
          <li>
            <a href="/about">Go to About App</a>
          </li>
          <li>
            <a href="/list">Go to List App</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
