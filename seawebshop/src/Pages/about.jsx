import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

export function About() {
  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
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
            <div className="about-content">
              <div className="about-img">
                <img src="images/about-atelier.jpg" alt="About Atelier" />
              </div>
              <div className="about-desc">
                <h3>About Us</h3>
                Mon's Atelier is a shop by shnnamons dedicated to all sorts of
                arts and crafts. From printed goods like stickers and art
                prints, to handmade crafts like clay figures and accessories,
                and even worn goods like bags and shirts-- Mon's Atelier has
                them all!
                <br />
                <br />
                Mon's Atelier ships worldwide!
              </div>
            </div>
            <hr />
            <div className="about-content">
              <div className="about-img">
                <img src="images/about-owner.jpg" alt="About Owner" />
              </div>
              <div className="about-desc">
                <h3>About the Owner</h3>
                Sheena Almodal, who goes by Mon online, is an artist that likes
                to engage and create all kinds of art. Mon's Atelier was first
                created as a passion project to display all sorts of arts &amp;
                crafts the owner has created, serving as a gallery for their
                hobby. Since then, the atelier has expanded into an online shop
                that offers goods from many artists worldwide, making it
                possible for more people to interact with all kinds of art.
              </div>
            </div>
            <p />
          </main>
          <Footer className="footer footer-container"/>
        </div>
      </>
    </>
  );
}
