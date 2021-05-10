import React from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>
    </div>
  );
}

export default App;
