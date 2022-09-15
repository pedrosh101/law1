import React from "react";
import Slide from "./Slide";
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
        <div className="nossoTime">
          <div className="timeContainer">
            <Slide />
          </div>
        </div>
        <div className="aboutBox">
          <div className="aboutText">
            <p>Conheça nosso time!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
