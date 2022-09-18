import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footerContainer">
        <div className="footerInfo">

          <div className="imgSec">
            <img src="./img/logo2.jpg" alt="logoend"></img>
          </div>
          <div className="enderecoSec">
            <h1 className="endereco-heading">Endereço</h1>
            <p>Rua Durval Rocha, 192</p>
            <p>Vila Paraíba - Guaratinguetá-SP</p>
            <div className="social-media">
              <div className="social-icons">
                <Link
                  className="social-icon-link facebook"
                  to="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </Link>

                <a
                  href="https://www.instagram.com/beautyspavp/"
                  className="social-icon-link instagram"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="last-line">
          <p>Template Advocacia</p>
          <p>All rights reserved © 2022</p>
          <a
            href="https://www.pedrohenriquelima.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <p>Designed by Pedro Henrique Lima</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
