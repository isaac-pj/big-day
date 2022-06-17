import React from "react";
import "./sectionCover.style.scss";
import Section from "../../components/section/section";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Icon from "../../components/icon/Icon";
import useIsMobile from "../../hooks/useIsMobile";
gsap.registerPlugin(ScrollToPlugin);

const SectionCover = () => {
  const isMobile = useIsMobile();

  const handleScrollClick = () => {
    gsap.to(window, { duration: 1, scrollTo: "#colors" });
  };

  return (
    <Section id="cover">
      <div className="SectionCover">
        <div className="SectionCover__imageFrame">
          {isMobile && (
            <img
              className="SectionCover__imageTextBackOne"
              src="src/assets/images/cover.svg"
              alt="image back part one"
            />
          )}
          <img
            className="SectionCover__imageTextBackTwo"
            src="src/assets/images/cover.svg"
            alt="image back part two"
          />
          {isMobile && (
            <img
              className="SectionCover__imageTextBackThree"
              src="src/assets/images/cover.svg"
              alt="image back part three"
            />
          )}
          <img
            className="SectionCover__imageText"
            src="src/assets/images/cover.svg"
            alt="Partícipes"
          />
        </div>
        <button
          className="SectionCover__scrollButtom"
          onClick={handleScrollClick}
        >
          {!isMobile && (
            <img src="src/assets/images/mouse-wheel.webp" alt="mouse wheel" />
          )}
          {isMobile && (
            <Icon name={"swipe_up"} size={48} color="var(--text-dark)" />
          )}
        </button>
      </div>
    </Section>
  );
};

export default SectionCover;
