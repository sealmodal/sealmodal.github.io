import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

export function Profile() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Profile</title>
      <link rel="stylesheet" href="resource/style.css" />
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
        <main className="main contents profile-content ">
          <p></p>
          <div className="about-content profile-box">
            <div className="about-img">
              <img src="images/about-user.jpg" alt="User Profile" />
            </div>
            <div className="about-desc">
              <h3>User Profile</h3>
              <br />
              <b>Name</b>: Kaelix Debonair
              <br />
              <b>Username</b>: Debonemaru
              <br />
              <b>Email</b>: kaechan@niji.co
              <br />
              <b>Birthday</b>: November 5<br />
              <b>Location</b>: America
              <br />
            </div>
          </div>
          <p />
        </main>
        <Footer className="footer footer-container"/>
      </div>
      </div>
    </>
  );
}
