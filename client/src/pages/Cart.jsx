import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Auth from "../utils/auth"

function Cart() {
    function renderCart() {
      if (Auth.loggedIn()) {
        return (
<div className="cart-container">
        <div className="services">
        <h1>Cart</h1>
          <h3>Services:</h3>
          <div className="service-item">
            <label htmlFor='wf'>Wash and fold</label>
            <input className="cart-input" type="checkbox" id="wf" />
          </div>
          <div className="service-item">
            <label htmlFor='wi'>Wash and Iron</label>
            <input className="cart-input" type="checkbox" id="wi" />
          </div>
          <div className="service-item">
            <label htmlFor='dc'>Dry Cleaning</label>
            <input className="cart-input" type="checkbox" id="dc" />
          </div>
          <div className="service-item">
            <label htmlFor="s-quant">Garment Quantity:</label>
            <input className="quantity-input" type="number" min={0} />
          </div>

          <div className="service-item cart-button">
          <a href="/success" className="mybutton" type="submit">Submit</a>
        </div>
        </div>

      </div>
        );
      } else {
        return (
 <h1  className="cart-warning">Must be signed in to checkout!</h1>
          );
        }
       }
        return(
          <body className="gradient-section">
          <Nav />
          <div>
          {renderCart()}
          </div>
          <Footer />
        </body>
      );
    }
export default Cart;
