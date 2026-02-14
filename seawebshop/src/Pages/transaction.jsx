import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

export function Transaction() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Transaction Complete!</title>
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
          <Sidebar className="sidebar left" />
          <main className="main contents receipt-content ">
            <p></p>
            <div className="receipt-box">
              <img
                src="../images/company-logo.png"
                alt="Company Logo"
                className="logo"
              />
              <h3>Transaction Successful!</h3>
              <p>Thank you for shopping with Mon's Atelier.</p>
              <Link to="/" className="trans-button">
                {" "}
                Back to Home
              </Link>
            </div>
            <p />
          </main>
          <Footer className="footer footer-container" />
        </div>
      </div>
    </>
  );
}
