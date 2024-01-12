//import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
import './style.css'
function Nav() {
return (
    <header className='bg-container'>
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