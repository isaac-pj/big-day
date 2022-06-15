import React, { useRef } from "react";
import { BUTTON_TYPES } from "../../constants/general";
import Button from "../button/button";
import ColorPallete from "../colorPallete/colorPallete";
import Section from "../section/section";
import printJS from "print-js";
import "./sectionColors.style.scss";

const SectionColors = () => {
  const colorPalleteRef = useRef(null);

  const handleOnClick = (event, { current }) => {
    // console.log(current);
    printJS("src/assets/docs/pallete.pdf");
  };

  return (
    <Section title="Cores">
      <div className="SectionColors">
        <ColorPallete ref={colorPalleteRef} />
        <div className="SectionColors__bottomContent">
          <p className="SectionColors__text">
            As cores escolhidas para comopor a identidade visual foram tons
            frios e pouco saturados inspiradas na natureza do local, criando uma
            harmonia com a paisagem, e mantendo o contraste necessário.
          </p>
          <Button
            type={BUTTON_TYPES.RAISED}
            text="Imprimir Paleta"
            onClick={(event) => handleOnClick(event, colorPalleteRef)}
          />
        </div>
      </div>
    </Section>
  );
};

export default SectionColors;
