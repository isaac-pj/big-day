import React from "react";
import "./main.style.scss";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import { BUTTON_TYPES } from "../../constants/general";
import SectionColors from "../../components/sectionColors/SectionColors";
import SectionInfo from "../../components/sectionInfo/sectionInfo";
import SectionDate from "../../components/sectionDate/sectionDate";
import SectionCover from "../../components/sectionCover/sectionCover";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SectionDressCode from "../../components/sectionDressCode/sectionDressCode";
import GroupLeaves from "../../components/groupLeaves/groupLeaves";
gsap.registerPlugin(ScrollToPlugin);

const MainPage = () => {
  const handleGoTop = () => {
    gsap.to(window, { duration: 2, scrollTo: 0 });
  };

  return (
    <div className="MainPage">
      <div className="MainPage__content">
        <GroupLeaves />
        <SectionCover />
        <SectionColors />
        <SectionDressCode />
        <SectionDate />
        <SectionInfo />
        <Button
          type={BUTTON_TYPES.FAB}
          onClick={handleGoTop}
          icon="north"
        ></Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
