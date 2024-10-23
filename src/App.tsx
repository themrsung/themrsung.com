import React from 'react';
import logo from './profile.jpg';
import './App.css';
import { Route, Routes, useHref, useLocation } from 'react-router-dom';

function App() {
  window.location.replace("https://linktr.ee/themrsung/);
  
  const location = useLocation();
  const {hash, pathname, search} = location;

  if (pathname === "/linkedin") return Link("https://linkedin.com/in/themrsung");
  if (pathname === "/youtube") return Link("https://youtube.com/@themrsung");
  if (pathname === "/instagram") return Link("https://instagram.com/themrsung");
  if (pathname === "/github") return Link("https://github.com/themrsung");
  if (pathname === "/mail") return Link("mailto:themrsung@gmail.com");

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

function Home() {
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
          href="https://github.com/themrsung"
        >
          GitHub
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

function Link(url : string) {
  window.location.href = url;
  return null;
}

export default App;
