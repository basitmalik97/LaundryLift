import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Success = () => {
  return (
    <body className="gradient-section center-success">
      <Nav />
      <div className="success-msg">
        <h1>Success!</h1>
        <p>Your order has been successfully proccessed! Someone will be dispatched to attend your needs ASAP!</p>
      </div>
      <Footer />
    </body>
  );
};
export default Success;