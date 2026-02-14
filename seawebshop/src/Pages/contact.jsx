import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

export function Contact() {
  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
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
          <main className="main contact-main">
            <div className="contact-box">
              <h3>Contact Form</h3>
              <form id="contact">
                <input
                  type="text"
                  className="form-item"
                  id="name"
                  name="Name"
                  placeholder="Name"
                />
                <br />
                <textarea
                  className="form-item"
                  id="message"
                  name="Message"
                  placeholder="Message here..."
                  defaultValue={""}
                />
                <button type="submit" className="button">
                  Submit
                </button>
              </form>
              <p id="response" />
            </div>
          </main>
          <Footer className="footer footer-container"/>
        </div>
        </div>
      </>
    </>
  );
}
