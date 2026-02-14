import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";

export function Login() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login</title>
      <link rel="stylesheet" href="../resource/registration.css" />
      <link
        href="https://fonts.googleapis.com/css?family=McLaren"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Manrope"
        rel="stylesheet"
      />
      <div className="fix">
      <div className="fix-container">
        <main className="main contents contact-main">
          <div className="contact-box">
            <h2>Log-In</h2>
            <form id="login">
              <input
                type="email"
                className="form-item"
                name="Email"
                placeholder="Email"
                required=""
              />
              <br />
              <input
                type="password"
                className="form-item"
                name="Password"
                placeholder="Password"
                required=""
              />
              <input type="submit" defaultValue="Submit" className="button" />
            </form>
            <p>
              Don't have an account yet? <Link to="/registration"><a>Sign-Up</a>.</Link>
            </p>
          </div>
        </main>
      </div>
      </div>
    </>
  );
}
