import '../styles/Contact.css';

const Contact = () => {
    return (
<body>
<div className="container">
<h1>Contact Us!</h1>
<form>
	<input type="text" placeholder="Your Name " />
	<input type="email" placeholder="Your Email" />
	<textarea placeholder="Your Message"></textarea>
	<button type="submit">Send</button>
</form>
</div>
   <div className="map">
<p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1486.9832498816852!2d-72.25511725940515!3d41.807482086187875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e68a397a05e30b%3A0xb26c6f4b296c85ea!2sUniversity%20of%20Connecticut!5e0!3m2!1sen!2sus!4v1704759711083!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
</div>
</body>
 );
};
export default Contact