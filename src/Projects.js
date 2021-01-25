import logo from './logo.svg';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <header className="Projects-header">
        <img src={logo} className="Projects-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Projects-link"
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

export default Projects;
