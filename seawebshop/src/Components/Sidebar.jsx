import { Link } from "react-router-dom"

export function Sidebar(){
    return (
        <>
            <nav className="sidebar left">
            <ul>
              <li>
                <Link to="/" className="nav-inactive">
                  <a href="index.html">Home</a>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-inactive">
                  About
                </Link>
              </li>
              <li>
                <a>
                  <Link to="/contact" className="nav-inactive">
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
        </>
    )
}