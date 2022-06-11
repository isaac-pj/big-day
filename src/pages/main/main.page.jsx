import React from "react";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Section from "../../components/section/section";
import { BUTTON_TYPES } from "../../constants/general";
import content from "../../constants/data";
import Subsection from "../../components/subsection/subsection";
import "./main.style.scss";

const MainPage = () => {
  const _renderClothesSubsection = (data) => {
    return <Subsection {...data}></Subsection>;
  };

  const _renderClothesSection = ({ title, content }) => {
    return (
      <Section title={title}>{content.map(_renderClothesSubsection)}</Section>
    );
  };

  return (
    <div className="MainPage">
      <div className="MainPage__content">
        {content.map(_renderClothesSection)}
        <Button
          type={BUTTON_TYPES.FAB}
          text="imprima layout"
          icon="north"
        ></Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
