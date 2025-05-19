import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World! This is my first React app.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="opener noreferrer"
        >
          Here is a cool site to help me learn more about React!
        </a>
        
      </header>
    </div>
  );
}

export default App;
