import pic from './profilepic.jpg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={pic} className="Header-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Header-link"
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

export default Header;
