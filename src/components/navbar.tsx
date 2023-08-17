
import './navbar.css';
import logo from '../assets/images/catLogo2.gif';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="nav-header">
      <div className="headerLeft">

        <img src={logo} className="App-logo" />
        <Link className="siteTitle" to="/"> SITE-A </Link>

      </div>

      <hr className="verticalLine" />

      <nav className="navBar">
        <Link className="navBarElement" to="/projects">	🧪Projects </Link>
        <Link className="navBarElement" to="/papers"> 📝Papers </Link>
        <Link className="navBarElement" to="/misc"> 📑Miscellaneous </Link>
        <Link className="navBarElement" to="/about"> 🐱About </Link>
      </nav>
    </header>

  );
}
