import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
        <footer className="footer footer-container">
          <div className="f-left">
            <a href="../index.html">
              <img
                src="../images/company-logo.png"
                alt="Company Logo"
                className="logo"
              />
            </a>
            <p>
              © shnnamons 2026
              <br />
              Email Us: contact@shnnamons.co
            </p>
          </div>
          <div className="f-right">
            <p>Photos used belong to their rightful owners.</p>
          </div>
        </footer>
    </>
  );
}
