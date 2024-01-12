import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <body>
      <Nav />
      <div className="container">
        <h1>Contact Us!</h1>
        <form>
          <input type="text" placeholder="Your Name " />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </body>
  );
};
export default Contact;
