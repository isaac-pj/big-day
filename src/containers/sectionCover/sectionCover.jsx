import React from "react";
import "./sectionCover.style.scss";
import Section from "../../components/section/section";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Icon from "../../components/icon/Icon";
import useIsMobile from "../../hooks/useIsMobile";
gsap.registerPlugin(ScrollToPlugin);

// *** IMPORT ASSETS ***
import imgMouseWheel from "../../assets/images/mouse-wheel.webp";
import imgCoverBackground from "../../assets/images/cover-background.svg";
import imgCover from "../../assets/images/cover.svg";

const SectionCover = () => {
  const isMobile = useIsMobile();

  const handleScrollClick = () => {
    gsap.to(window, { duration: 1, scrollTo: "#colors" });
  };

  return (
    <Section id="cover">
      <div className="SectionCover">
        <div className="SectionCover__imageFrame">
          <img
            className="SectionCover__imageTextBack"
            src={imgCoverBackground}
            alt="image back"
          />
          <img
            className="SectionCover__imageText"
            src={imgCover}
            alt="Partícipes"
          />
        </div>
        <button
          className="SectionCover__scrollButton"
          onClick={handleScrollClick}
        >
          {!isMobile && <img src={imgMouseWheel} alt="mouse wheel" />}
          {isMobile && (
            <Icon name={"swipe_up"} size={48} color="var(--text-dark)" />
          )}
        </button>
      </div>
    </Section>
  );
};

export default SectionCover;
