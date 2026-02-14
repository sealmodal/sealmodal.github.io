import { Link } from "react-router-dom";

export function Register() {
  return (
    <>
     <div className="fix">
      <div className="fix-container">
        <main className="main contents contact-main">
          <div className="contact-box">
            <h2>Sign-Up</h2>
            <form id="sign">
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
                type="password"
                className="form-item pass"
                name="Password"
                placeholder="Password"
                required=""
              />
              <input
                type="password"
                className="form-item cpass"
                name="Password"
                placeholder="Confirm Password"
                required=""
              />
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
              <input type="submit" defaultValue="Submit" className="button" />
            </form>
            <p>
              Already have an account? <Link to="/login"><a>Login</a></Link>.
            </p>
          </div>
        </main>
      </div>
      </div>
    </>
  );
}
