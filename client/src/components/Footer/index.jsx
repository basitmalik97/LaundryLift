import './style.css'

function Footer() {

return (
<footer>
<div className="footer-social">
    <a href="#" target="_blank" className="fa fa-facebook"></a>
    <a href="#" target="_blank" className="fa fa-twitter"></a>
    <a href="#" target="_blank" className="fa fa-instagram"></a>
    <br />
    <br />
</div>

<div className="footer-nav">

    <div className="footer-navbutton">
        <a href="#">Home</a>
    </div>

    <div className="footer-navbutton">
        <a href="#">About Us</a>
    </div>
    
    <div className="footer-navbutton">
        <a href="#">Services</a>
    </div>

    <div className="footer-navbutton">
        <a href="#">Contact Us</a>
    </div>

    <div className="footer-navbutton">
        <a href="#">Login</a>
    </div>
</div>
<div className="footer-bottom">
    All rights reserved - Copyright 2023©
</div>
</footer>   
)}

export default Footer;


