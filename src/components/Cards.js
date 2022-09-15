import React from "react";
import "./Cards.css";

function Cards() {
  const card = [
    {
      id: 1,
      title: "DIREITO EMPRESARIAL, ECONÔMICO E SUCESSÃO EMPRESARIAL",
      testimonial: "Advogado - OAB/PS 19.590",
    },
    {
      id: 2,
      title: "DIREITO IMOBILIÁRIO",
      testimonial: "Advogado - OAB/PS 19.470",
    },
    {
      id: 3,
      title: "DIREITO CIVIL",
      testimonial: "Advogado - OAB/PS 19.000",
    },
    {
      id: 4,
      title: "DIREITO TRIBUTÁRIO",
      testimonial: "Direito Tributário é a área do direito responsável por determinar e fiscalizar a arrecadação de tributos, como taxas e impostos. Também chamado de Direito Fiscal, o segmento tem, como principal papel, o combate de possíveis abusos por parte do Fisco e o controle de pagamento dos contribuintes.",
    },
    {
      id: 5,
      title: "DIREITO TRABALHISTA E PREVIDENCIÁRIO",
      testimonial: "Advogado - OAB/PS 19.590",
    },
    {
      id: 6,
      title: "DIREITO DE FAMÍLIAS E SUCESSÕES",
      testimonial: "Advogado - OAB/PS 19.470",
    },
    {
      id: 7,
      title: "DIREITO BANCÁRIO E FINANCEIRO",
      testimonial: "Advogado - OAB/PS 19.000",
    },
    {
      id: 8,
      title: "DIREITO DO CONSUMIDOR",
      testimonial: "Advogado - OAB/PS 25.190",
    },
  ];

  return (
    <>
      <section>
        <div className="cardsContainer">
          <div className="allCards">
            {card.map((info) => (
              <div className="card">
                <div>{info.title}</div>
                {info.testimonial}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
