import React from "react";
import "./sectionCover.style.scss";
import Section from "../../components/section/section";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const SectionCover = () => {
  const handleScrollClick = () => {
    gsap.to(window, { duration: 1, scrollTo: "#colors" });
  };

  return (
    <Section id="cover">
      <div className="SectionCover">
        <img
          className="SectionCover__imageText"
          src="src/assets/images/cover.svg"
          alt="Patícipes"
        />
        <button
          className="SectionCover__scrollButtom"
          onClick={handleScrollClick}
        >
          <img src="src/assets/images/mouse-wheel.webp" alt="mouse wheel" />
        </button>
      </div>
    </Section>
  );
};

export default SectionCover;
