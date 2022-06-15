import React from "react";
import Section from "../section/section";
import "./sectionInfo.style.scss";

const data = [
  {
    text: "Lista de Presentes",
    img: "src/assets/images/icons/007-surprise.png",
    url: "http://finalfeliz.de/isaac-lima-leticia-muniz",
  },
  {
    text: "Pix para Doação",
    img: "src/assets/images/icons/002-money.png",
    url: "https://nubank.com.br/pagar/99w6/gwL73Oj0fU",
  },
  {
    text: "Rota no Maps",
    img: "src/assets/images/icons/004-location.png",
    url: "https://www.google.com.br/maps/dir/-4.9617084,-39.0189615/-4.9295278,-38.9759167/@-4.9500359,-39.0148976,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0",
  },
];

const handleOnClick = (url) => {
  window.open(url, "_blank");
};

const SectionInfo = () => {
  return (
    <Section title="Informações">
      <div className="SectionInfo">
        <p className="SectionInfo__text">
          Por favor, chegar com <strong>30 min</strong> de antecedencia.
          Agradecemos muito sua presença.
        </p>
        <div className="SectionInfo__bottomContent">
          {data.map(({ text, img, url }) => (
            <div
              className="SectionInfo__card"
              onClick={() => handleOnClick(url)}
            >
              <img className="SectionInfo__cardImage" src={img} alt={text} />
              <div className="SectionInfo__textFrame">
                <h5 className="SectionInfo__cardText">{text}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SectionInfo;
