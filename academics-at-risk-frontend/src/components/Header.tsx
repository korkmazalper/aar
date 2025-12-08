import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <h1>Academics at Risk e.V.</h1>
          </Link>
          
          <ul className="nav-menu">
            <li className="nav-item dropdown">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/for-academics" className="nav-link">For Academics</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/opportunities" className="nav-link">Opportunities</Link>
              <ul className="dropdown-menu">
                <li><Link to="/funds">Funds & Scholarship</Link></li>
                <li><Link to="/conferences">Conferences</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="/working-groups" className="nav-link">Working Groups</Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-link">Reports</Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">News</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
