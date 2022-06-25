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
            width="3356"
            height="1192"
            className="SectionCover__imageTextBack"
            src={imgCoverBackground}
            alt="image back"
          />
          <img
            className="SectionCover__imageText"
            src={imgCover}
            width="670"
            height="378"
            alt="Partícipes"
          />
        </div>
        <button
          className="SectionCover__scrollButton"
          onClick={handleScrollClick}
        >
          {!isMobile && (
            <img src={imgMouseWheel} height="80" width="34" alt="mouse wheel" />
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
