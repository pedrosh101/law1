import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <div className="leftSection">
            <h1>Tradição e excelência, prontas para o mundo moderno.</h1>
            <p>
              Aqui na Template Advocacia, qualidade profissional, respeito ao
              cliente e confiabilidade são elementos centrais em tudo que
              fazemos. Nossa abordagem ágil e moderna nos mantém em destaque em
              um mercado cada vez mais dinâmico.
            </p>
            <div className="hero-btns">
              <Button
                className="btns"
                buttonStyle="btnPrimary"
                buttonSize="btnLarge"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
          <div className="rightSection">
            <img src="../img/heroright.jpg" className="imgRight" alt="rr"></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
