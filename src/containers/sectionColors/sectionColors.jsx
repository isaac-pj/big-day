import React, { useRef } from "react";
import "./sectionColors.style.scss";
import { BUTTON_TYPES } from "../../constants/general";
import Button from "../../components/button/button";
import ColorPallete from "../../components/colorPallete/colorPallete";
import Section from "../../components/section/section";
import useIsMobile from "../../hooks/useIsMobile";
import printJS from "print-js";

// *** IMPORT ASSETS ***
import pdfPallete from "../../assets/docs/pallete.pdf";

const SectionColors = () => {
  const isMobile = useIsMobile();
  const colorPalleteRef = useRef(null);

  const handlePrintClick = (event, { current }) => {
    printJS(pdfPallete);
  };

  const handleSaveClick = (event, { current }) => {
    window.open(pdfPallete, "_blank");
  };

  return (
    <Section title="Cores" id="colors">
      <div className="SectionColors">
        <ColorPallete ref={colorPalleteRef} />
        <div className="SectionColors__bottomContent">
          <p className="SectionColors__text">
            As cores escolhidas para compor a identidade visual foram tons frios
            e pouco saturados inspiradas na natureza do local, criando uma
            harmonia com a paisagem, e mantendo o contraste necessário.
          </p>
          {!isMobile && (
            <Button
              type={BUTTON_TYPES.RAISED}
              text="Imprimir Paleta"
              onClick={(event) => handlePrintClick(event, colorPalleteRef)}
            />
          )}
          {isMobile && (
            <Button
              type={BUTTON_TYPES.RAISED}
              text="Salvar PDF"
              onClick={(event) => handleSaveClick(event, colorPalleteRef)}
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default SectionColors;
