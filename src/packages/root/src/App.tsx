import { Link } from 'react-router';
import './App.css';

function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Root App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Go to About App</Link>
            {/* <a href="/about">Go to About App</a> */}
          </li>
          <li>
            <Link to="/list">Go to List App</Link>
            {/* <a href="/list">Go to List App</a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
