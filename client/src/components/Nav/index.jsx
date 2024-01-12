//import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
import './style.css'
function Nav() {
    // function renderNav() {
    //     if (Auth.loggedIn()) {
    //         return (
    //             <h1> You are logged in! </h1>
    //         )
    //     } else {
    //         return (
    //             <h1> You need to Login to view this!</h1>
    //         )
    //     }
    // }
return (
    <header>
        <div className="logo">
            <a href="#">
                <img src="./src/assets/Logo.png" alt="Logo" /> Laundry Lift
            </a>
        </div>
         <nav>
            <div className="navbutton">
                <a href="#">Home</a>
            </div>
    
            <div className="navbutton">
                <a href="#">About Us</a>
            </div>
                    
            <div className="navbutton">
                <a href="#">Services</a>
            </div>

            <div className="contactusnavbutton">
                <a href="#">Contact Us</a>
            </div>

            <div className="loginnavbutton">
                <a href="#">Login</a>
            </div>   
        </nav>
    </header>

    )
}

export default Nav