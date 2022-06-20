import React, { useEffect, useRef } from "react";
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
import useIsMobile from "../../hooks/useIsMobile";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const MainPage = () => {
  const isMobile = useIsMobile();
  const buttonRef = useRef();

  useEffect(() => {
    const buttonElem = buttonRef.current;
    // console.log(buttonElem);
    gsap.fromTo(
      buttonElem,
      {
        // scale: 0,
        opacity: 0,
        duration: 0.5,
      },
      {
        // scale: 1,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          // trigger: "#colors",
          trigger: buttonElem,
          toggleClass: "locked",
          toggleActions: "restart none none reverse",
          start: () =>
            `${
              document.getElementById("colors").offsetTop +
              (isMobile ? 76 : 92) -
              document.getElementById("content").offsetHeight
            }px top`,
          end: () => `bottom ${window.innerHeight - (isMobile ? 16 : 32)}px`,
          // pin: true,
          // markers: true,
        },
      }
    );
  }, []);
  const handleGoTop = () => {
    gsap.to(window, { duration: 2, scrollTo: 0 });
  };

  return (
    <div className="MainPage">
      <div id="content" className="MainPage__content">
        <GroupLeaves />
        <SectionCover />
        <SectionColors />
        <SectionDressCode />
        <SectionDate />
        <SectionInfo />
        <Button
          ref={buttonRef}
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
