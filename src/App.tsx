import React from 'react';
import logo from './profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey! I didn't have time to personalize <code>this</code> page.<br></br>Here are the links you might need!!
        </p>
        <a
          className="App-link"
          href="https://linkedin.com/in/themrsung"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://youtube.com/@themrsung"
        >
          YouTube
        </a>
        <a
          className="App-link"
          href="https://instagram.com/themrsung"
        >
          Instagram
        </a>
        <a
          className="App-link"
          href="mailto:themrsung@gmail.com"
        >
          themrsung@gmail.com
        </a>
      </header>
    </div>
  );
}

export default App;
