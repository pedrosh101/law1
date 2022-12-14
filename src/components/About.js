import React from "react";
import Slide from "./Slide";
import Cards from "./Cards";
import "./About.css";

function About() {
  return (
    <>
      <section className="About">
        <div className="aboutContent">
          <div className="cardA">
            <h1>Gestão de riscos empresariais</h1>
            <p>
              Sed consectetur nibh a justo lobortis euismod. Praesent eget
              turpis vulputate, porttitor tellus posuere, pulvinar turpis.
              Suspendisse efficitur massa sed tempor tempus. Integer turpis
              ligula, convallis sit amet ipsum vitae, mattis bibendum leo.
              Curabitur iaculis accumsan est, ac tincidunt dui faucibus eget.
            </p>
          </div>
        </div>

        <div className="timeContent">
          <div className="timeContainer">
            <Slide />
          </div>
          <div className="boxContainer">
            <div className="aboutText">
              <p>
                Ao contratar a Template Advogados, nosso cliente recebe mais do
                que uma representação profissional. Desde 2013, nosso Escritório
                de advocacia oferece expertise em diversas áreas jurídicas, com
                atuação em Guaratinguetá e Região. Esperamos seu contato para
                entender melhor as suas necessidades.
              </p>
            </div>
          </div>
        </div>

        <div className="cardsContent">
          <h1>Áreas De Atuação</h1>
          <Cards />
        </div>
      </section>
    </>
  );
}

export default About;
