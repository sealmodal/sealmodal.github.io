import { Link } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

export function Home() {
  return (
    <>
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
        <div className="grid-container">
          <Sidebar className="sidebar left"/>
          <main className="main">
            <div className="index">
              <div className="hero">
                <div className="hero-content">
                  <h1>Shop artists' works and products.</h1>
                  <div className="hero-button">
                    <Link to="/products">Shop Now &gt;</Link>
                  </div>
                </div>
              </div>
              <div className="in-between">
                <h2>Featured Products</h2>
              </div>
              <div className="products">
                <div className="product">
                  <img
                    src="images/prod-01.jpg"
                    alt="Product: Lucky! Clover Bag"
                  />
                  <figcaption>
                    <h4>Lucky! Clover Bag</h4>Quality canvas messenger bag with
                    keychain inclusions.
                  </figcaption>
                </div>
                <div className="product">
                  <img src="images/prod-02.jpg" alt="Product: Shell necklace" />
                  <figcaption>
                    <h4>Shell necklace</h4>White shell beads on wax thread.
                    Available in other colors.
                  </figcaption>
                </div>
                <div className="product">
                  <img
                    src="images/prod-03.jpg"
                    alt="Product: Assorted Sticker Sheets"
                  />
                  <figcaption>
                    <h4>Assorted Sticker Sheets</h4>Vinyl sticker mix with
                    various themes. Comes in matte and glossy finishes.
                  </figcaption>
                </div>
                {/**/}
                <div className="product">
                  <img
                    src="images/prod-04.jpg"
                    alt="Product: Fish Rubber Stamp"
                  />
                  <figcaption>
                    <h4>Fish Rubber Stamp</h4>Handmade fish stamp on rubber (ink
                    not included).
                  </figcaption>
                </div>
                <div className="product">
                  <img
                    src="images/prod-05.jpg"
                    alt="Product: Assorted Star Stamps"
                  />
                  <figcaption>
                    <h4>Assorted Star Stamps</h4>Rubber star stamps in various
                    styles (ink not included).
                  </figcaption>
                </div>
                <div className="product">
                  <img
                    src="images/prod-06.jpg"
                    alt="Product: Apple Phonestrap"
                  />
                  <figcaption>
                    <h4>Apple Phonestrap</h4>Handmade phonestraps in different
                    des.
                  </figcaption>
                </div>
              </div>
            </div>
          </main>
          <Footer className="footer footer-container"/>
        </div>
      </>
    </>
  );
}
