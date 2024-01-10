//import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav() {
    function renderNav() {
        if (Auth.loggedIn()) {
            return (
                <h1> You are logged in! </h1>
            )
        } else {
            return (
                <h1> You need to Login to view this!</h1>
            )
        }
    }
    return (
        <header>
            <h1>Laundry Lift</h1>
            <nav>
                {renderNav()}
            </nav>
        </header>
    )
}

export default Nav