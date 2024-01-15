//import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import "./style.css";

function Nav() {

  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li className="logoutnavbutton">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li className="loginnavbutton">
            <a href="/signup">Signup</a>
          </li>
          <li className="loginnavbutton">
            <a href="/login">Login</a>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="bg-container">
      <div className="logo">
        <a href="#">
          <img src="./src/assets/Logo.png" alt="Logo" /> Laundry Lift
        </a>
      </div>
      <nav className="navbar">
        <div className="navbutton">
          <a href="/home">Home</a>
        </div>

        <div className="navbutton">
          <a href="/about">About Us</a>
        </div>

        <div className="navbutton">
          <a href="/services">Services</a>
        </div>

        <div className="contactusnavbutton">
          <a href="/contact">Contact Us</a>
        </div>
        {showNav()}
      </nav>
    </header>
  );
}

export default Nav;
