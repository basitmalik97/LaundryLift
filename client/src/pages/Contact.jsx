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
</body>
 );
};
export default Contact