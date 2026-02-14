import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

export function Cart() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cart</title>
      <link rel="stylesheet" href="resource/style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=McLaren"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Manrope"
        rel="stylesheet"
      />
      <div className="grid-container">
        <Sidebar className="sidebar left" />
        <main className="main contents">
          <p></p>
          <div className="cart-content atc">
            <div className="cart-img">
              <img
                src="images/prod-03.jpg"
                alt="Product: Assorted Sticker Sheets"
              />
            </div>
            <div className="cart-desc">
              <p className="title">
                <b>Assorted Sticker Sheets</b>
                <br />
                Vinyl sticker mix with various themes. Comes in matte and glossy
                finishes.
              </p>
              <p className="quantity">Quantity: 1</p>
              <p className="price">Price: 100</p>
            </div>
          </div>
          <hr />
          <div className="cart-content">
            <div className="cart-img">
              <img
                src="images/prod-04.jpg"
                alt="Product: Assorted Sticker Sheets"
              />
            </div>
            <div className="cart-desc">
              <p className="title">
                <b>Fish Rubber Stamp</b>
                <br />
                Handmade fish stamp on rubber (ink not included).
              </p>
              <p className="quantity">Quantity: 1</p>
              <p className="price">Price: 150</p>
            </div>
          </div>
          <div className="cart-content atc">
            <div className="cart-img">
              <img
                src="images/prod-05.jpg"
                alt="Product: Assorted Sticker Sheets"
              />
            </div>
            <div className="cart-desc">
              <p className="title">
                <b>Assorted Star Stamps</b>
                <br />
                Rubber star stamps in various styles (ink not included).
              </p>
              <p className="quantity">Quantity: 2</p>
              <p className="price">Price: 200</p>
            </div>
          </div>
          <hr />
          <p />
          <div className="checkout">
            <div className="details">
              <p className="cprice">
                <b>Item SubTotal</b>: 300
              </p>
              <p className="cprice">
                <b>Shipping Fee</b>: 50
              </p>
              <p className="cprice">
                <b>Total</b>: 350
              </p>
            </div>
            <Link to="/payment" className="cart-button">
              {" "}
              Proceed to Checkout
            </Link>
          </div>
        </main>
        <Footer className="footer footer-container" />
      </div>
    </>
  );
}
