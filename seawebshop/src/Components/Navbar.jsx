import { Link } from "react-router-dom"

export function Navbar(){
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Home</title>
            <link rel="stylesheet" href="resource/style.css" />
            <link
            href="https://fonts.googleapis.com/css?family=McLaren"
            rel="stylesheet"
            />
            <link
            href="https://fonts.googleapis.com/css?family=Manrope"
            rel="stylesheet"
            />

            <header className="header header-container">
            <div className="header-left">
              <Link to="/">
                <img
                  src="images/company-logo.png"
                  alt="Company Logo"
                  className="logo"
                />
              </Link>
              <p className="company-name">Mon's Atelier</p>
            </div>
            <div className="header-right">
              <Link to="/cart">
                <img className="icon cart" src="images/icon-cart.png" />
              </Link>
              <Link to="/profile">
                <img className="icon prof" src="images/icon-profile.png" />
              </Link>
              <Link to="/login">
                <img className="icon log" src="images/icon-login.png" />
              </Link>
            </div>
          </header>
        </>
    )
}