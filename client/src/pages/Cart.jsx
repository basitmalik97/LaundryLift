import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <body className="gradient-section">
      <Nav />
      <div className="cart-container">
        <div className="services">
        <h1>Cart</h1>
          <h3>Services:</h3>
          <div>
            <label htmlFor='wf'>Wash and fold</label>
            <input className="cart-input" type="checkbox" id="wf" />
          </div>
          <div>
            <label htmlFor='wi'>Wash and Iron</label>
            <input className="cart-input" type="checkbox" id="wi" />
          </div>
          <div>
            <label htmlFor='dc'>Dry Cleaning</label>
            <input className="cart-input" type="checkbox" id="dc" />
          </div>
          <div>
          <button className="" type="submit">Submit</button>
        </div>
        </div>

      </div>
      <Footer />
    </body>
  );
};
export default Cart;
