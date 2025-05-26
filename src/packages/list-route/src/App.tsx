import './App.css';

const App = () => (
  <div className="list-container">
    <h1>Explore Amazing Lists!</h1>
    <img
      src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
      alt="Lists Inspiration"
      className="list-image"
    />
    <p>
      <strong>Welcome to the Lists Portal!</strong> Here, you can discover, create, and share lists
      of all kinds—whether it's your favorite books, top travel destinations, must-try recipes, or
      anything else you can imagine.
    </p>
    <section>
      <h2>📝 Why Lists?</h2>
      <ul>
        <li>Organize your thoughts and ideas</li>
        <li>Track progress and achievements</li>
        <li>Share recommendations with the community</li>
        <li>Get inspired by others' collections</li>
      </ul>
    </section>
    <section>
      <h2>🌍 Get Involved</h2>
      <ol>
        <li>Browse trending and featured lists</li>
        <li>Create and customize your own lists</li>
        <li>Like and comment on lists you love</li>
        <li>Connect with fellow list-makers</li>
      </ol>
    </section>
    <blockquote>
      "Lists are the keys to clarity and creativity." <br />
      <span style={{ fontSize: '0.9em', color: '#888' }}>— The Portal Team</span>
    </blockquote>
    <footer className="list-footer">
      <p>Ready to start your list-making journey? Dive in and let your ideas take shape!</p>
    </footer>
  </div>
);

export default App;
