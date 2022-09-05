import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <div className="leftSection">
            <h1>Tradição e excelência, prontas para o mundo moderno.</h1>
            <p>
              Aqui na Piet Advocacia, qualidade profissional, respeito ao cliente e confiabilidade são elementos centrais em tudo que fazemos. Nossa abordagem ágil e moderna nos mantém em destaque em um mercado cada vez mais dinâmico.
            </p>
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
