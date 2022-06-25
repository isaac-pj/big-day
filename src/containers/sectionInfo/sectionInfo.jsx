import React from "react";
import Section from "../../components/section/section";
import useIsMobile from "../../hooks/useIsMobile";
import "./sectionInfo.style.scss";

const data = [
  {
    key: 0,
    text: "Lista de Presentes",
    img: "007-surprise.png",
    url: "http://finalfeliz.de/isaac-lima-leticia-muniz",
  },
  {
    key: 1,
    text: "Pix para Doação",
    img: "002-money.png",
    url: "https://nubank.com.br/pagar/99w6/gwL73Oj0fU",
  },
  {
    key: 2,
    text: "Rota no Maps",
    img: "004-location.png",
    url: "https://www.google.com.br/maps/dir/-4.9617084,-39.0189615/-4.9295278,-38.9759167/@-4.9500359,-39.0148976,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0",
  },
];

const SectionInfo = () => {
  const isMobile = useIsMobile();

  const handleOnClick = (url) => {
    window.open(url, "_blank");
  };

  const getImageUrl = (path) => {
    return new URL(`../../assets/images/icons/${path}`, import.meta.url).href;
  };

  return (
    <Section title="Informações" id="info">
      <div className="SectionInfo">
        <p className="SectionInfo__text">
          Por favor, chegar com <strong>30 min</strong> de antecedência.
          Agradecemos muito sua presença.
        </p>
        <div className="SectionInfo__bottomContent">
          {data.map(({ key, text, img, url }) => (
            <div
              key={key}
              className="SectionInfo__card"
              onClick={() => handleOnClick(url)}
            >
              <img
                className="SectionInfo__cardImage"
                src={getImageUrl(img)}
                alt={text}
                height={isMobile ? 68 : 136}
                width={isMobile ? 68 : 136}
              />
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
