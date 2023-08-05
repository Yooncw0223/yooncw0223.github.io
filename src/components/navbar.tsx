import './navbar.css';

export default function Navbar() {
  return (
    <header>
    <div>
    
      <nav className="navBar">
        
        <ul className="navList">
          <li className="navBarElement">
            <a href="#"> Home </a>
          </li>

          <li className="navBarElement">
            <a href="#"> Reflections </a>
          </li>

          <li className="navBarElement">
            <a href="#"> Projects </a>
          </li>

          <li className="navBarElement">
            <a href="#"> Miscellaneous </a>
          </li>

          <li className="navBarElement">
            <a href="#"> About </a>
          </li>
        </ul>
      </nav>

    </div>
    </header>
  );
}
