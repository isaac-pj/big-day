import React from "react";
import Section from "../section/section";
import "./sectionCover.style.scss";

const SectionCover = () => {
  const handleScrollClick = () => {
    console.log("scroll to next section");
  };

  return (
    <Section>
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
