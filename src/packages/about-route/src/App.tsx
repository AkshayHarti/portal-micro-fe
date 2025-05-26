import './App.css';

const App = () => (
  <div className="about-container">
    <h1>Welcome to the Portal!</h1>
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      alt="Portal Inspiration"
      className="about-image"
    />
    <p>
      <strong>Our Portal</strong> is more than just a website—it's a vibrant hub designed to bring
      people, ideas, and opportunities together. Whether you're here to explore, connect, or create,
      you've found the right place.
    </p>
    <section>
      <h2>🌟 Our Mission</h2>
      <ul>
        <li>Empower users with seamless access to resources</li>
        <li>Foster a collaborative and inclusive community</li>
        <li>Encourage innovation and creative problem-solving</li>
      </ul>
    </section>
    <section>
      <h2>🚀 What Can You Do Here?</h2>
      <ol>
        <li>Discover new features and tools</li>
        <li>Connect with like-minded individuals</li>
        <li>Share your projects and get feedback</li>
        <li>Stay updated with the latest news and events</li>
      </ol>
    </section>
    <blockquote>
      "The best way to predict the future is to create it." <br />
      <span style={{ fontSize: '0.9em', color: '#888' }}>— Abraham Lincoln</span>
    </blockquote>
    <footer className="about-footer">
      <p>
        Thank you for being part of our journey. If you have any questions or ideas, don't hesitate
        to reach out!
      </p>
    </footer>
  </div>
);

export default App;
