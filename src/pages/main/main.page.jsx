import React from "react";
import "./main.style.scss";
import GroupLeaves from "../../containers/groupLeaves/groupLeaves";
import SectionColors from "../../containers/sectionColors/SectionColors";
import SectionInfo from "../../containers/sectionInfo/sectionInfo";
import SectionDate from "../../containers/sectionDate/sectionDate";
import SectionCover from "../../containers/sectionCover/sectionCover";
import SectionDressCode from "../../containers/sectionDressCode/sectionDressCode";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import { BUTTON_TYPES } from "../../constants/general";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
