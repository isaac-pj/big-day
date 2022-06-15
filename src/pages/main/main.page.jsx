import React from "react";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Section from "../../components/section/section";
import { BUTTON_TYPES } from "../../constants/general";
import content from "../../constants/data";
import Subsection from "../../components/subsection/subsection";
import SectionColors from "../../components/sectionColors/SectionColors";
import SectionInfo from "../../components/sectionInfo/sectionInfo";
import SectionDate from "../../components/sectionDate/sectionDate";
import SectionCover from "../../components/sectionCover/sectionCover";
import "./main.style.scss";

const MainPage = () => {
  const _renderCoverSection = () => {
    return <SectionCover />;
  };

  const _renderColorsSection = () => {
    return <SectionColors />;
  };

  const _renderClothesSubsection = (data) => {
    return <Subsection {...data}></Subsection>;
  };

  const _renderClothesSection = (content) => {
    return content.map(({ title, content }) => (
      <Section title={title}>{content.map(_renderClothesSubsection)}</Section>
    ));
  };

  const _renderDateSection = () => {
    return <SectionDate />;
  };

  const _renderInfoSection = () => {
    return <SectionInfo />;
  };

  const handleGoTop = () => {
    console.log("go to top");
  };

  return (
    <div className="MainPage">
      <div className="MainPage__content">
        {_renderCoverSection()}
        {_renderColorsSection()}
        {_renderClothesSection(content)}
        {_renderDateSection()}
        {_renderInfoSection()}
        <Button
          type={BUTTON_TYPES.FAB}
          onClick={handleGoTop}
          text="go top"
          icon="north"
        ></Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
