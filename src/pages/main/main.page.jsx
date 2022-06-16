import React from "react";
import "./main.style.scss";
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
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FloatImage from "../../components/floatImage/floatImage";
import useIsMobile from "../../hooks/useIsMobile";
gsap.registerPlugin(ScrollToPlugin);

const MainPage = () => {
  const isMobile = useIsMobile();

  const handleGoTop = () => {
    gsap.to(window, { duration: 2, scrollTo: 0 });
  };

  const _renderClothesSubsection = (data) => {
    return <Subsection {...data}></Subsection>;
  };

  const _renderClothesSection = (content) => {
    return content.map(({ title, content }) => (
      <Section title={title}>{content.map(_renderClothesSubsection)}</Section>
    ));
  };

  return (
    <div className="MainPage">
      <div className="MainPage__content">
        {!isMobile && <FloatImage top={-300} right={-300} />}
        {isMobile && <FloatImage top={-100} right={-100} />}
        <SectionCover />
        <SectionColors />
        {_renderClothesSection(content)}
        <SectionDate />
        <SectionInfo />
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
