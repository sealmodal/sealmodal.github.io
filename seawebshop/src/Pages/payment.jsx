import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

export function Payment() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Payment</title>
      <link rel="stylesheet" href="../resource/style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=McLaren"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Manrope"
        rel="stylesheet"
      />
      <div className="fix">
      <div className="grid-container">
        <Sidebar className="sidebar left"/>
        <main className="main contact-main">
          <div className="contact-box">
            <h3>Payment Form</h3>
            <form id="payment">
              <input
                type="text"
                className="form-item fname"
                name="FName"
                placeholder="First Name"
                required=""
              />
              <br />
              <input
                type="text"
                className="form-item lname"
                name="LName"
                placeholder="Last Name"
                required=""
              />
              <br />
              <input
                type="text"
                className="form-item email"
                name="Email"
                placeholder="Email"
                required=""
              />
              <br />
              <input
                type="text"
                className="form-item num"
                name="Mobile Number"
                placeholder="Mobile Number"
                required=""
              />
              <br />
              <input
                type="text"
                className="form-item add"
                name="Address"
                placeholder="Address"
                required=""
              />
              <br />
              <textarea
                className="form-item"
                id="message"
                name="Message"
                placeholder="Message here..."
                defaultValue={""}
              />
              <br />
              <label>
                <h4>Payment Option</h4>
              </label>
              <br />
              <select className="form-item" name="fruits">
                <option value="COD">Cash on Delivery</option>
                <option value="GCash">GCash</option>
                <option value="Paypal">PayPal</option>
              </select>
              <Link to="/transaction">
              <button type="submit" className="button">
                Submit
              </button>
              </Link>
            </form>
            <p id="response" />
          </div>
        </main>
        <Footer className="footer footer-container"/>
      </div>
      </div>
    </>
  );
}
