import './App.css';
// import { Link } from 'react-router';

const App = () => (
  <div className="root-container">
    <h1>Welcome to the Portal Hub!</h1>
    <img
      src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      alt="Portal Hub"
      className="root-image"
    />
    <p>
      <strong>Your gateway to discovery, collaboration, and creativity.</strong> Jump into our
      different apps to explore, connect, and contribute to an ever-growing community!
    </p>
    <nav>
      <ul className="root-nav">
        <li>
          <a href="/about">About App</a>
        </li>
        <li>
          <a href="/list">List App</a>
        </li>
      </ul>
    </nav>
    <section>
      <h2>✨ Features</h2>
      <ul>
        <li>Unified access to all portal apps</li>
        <li>Modern, user-friendly interface</li>
        <li>Quick navigation and seamless experience</li>
      </ul>
    </section>
    <section>
      <h2>🤝 Join the Community</h2>
      <ol>
        <li>Share your ideas and feedback</li>
        <li>Connect with fellow users</li>
        <li>Help shape the future of the portal</li>
      </ol>
    </section>
    <blockquote>
      "Together, we build something extraordinary."
      <br />
      <span style={{ fontSize: '0.9em', color: '#888' }}>— The Portal Team</span>
    </blockquote>
    <footer className="root-footer">
      <p>Thank you for being here. Explore, create, and enjoy your journey through the portal!</p>
    </footer>
  </div>
);

export default App;
