
import './navbar.css';
import logo from '../assets/images/catLogo2.gif';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="nav-header">
      <div className="headerLeft">

        <img src={logo} className="App-logo" />
        <h1 className="siteTitle"> Yooncw0223 </h1>

      </div>

      <nav className="navBar">
        
        <ul className="navList">
          <li className="navBarElement">
            <Link to="/"> Home </Link>
          </li>

          <li className="navBarElement">
            <Link to="/reflections"> Reflections </Link>
          </li>

          <li className="navBarElement">
            <Link to="/projects"> Projects </Link>
          </li>

            <li className="navBarElement">
              <Link to="/misc"> Miscellaneous </Link>
            </li>

            <li className="navBarElement">
              <Link to="/about"> About </Link>
            </li>
          </ul>
        </nav>
    </header>

  );
}
