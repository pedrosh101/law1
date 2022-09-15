import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            div
            className="titles"
          >
            <div className="navbarText" onClick={closeMobileMenu}>
              LOGO
            </div>
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>
            <li>
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                INÍCIO
              </Link>
            </li>
            <li>
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                ESCRITÓRIO
              </Link>
            </li>
            <li>
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                SOBRE NÓS
              </Link>
            </li>
            <li>
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                CONTATO
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
