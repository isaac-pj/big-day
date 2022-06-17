import React from "react";
import Section from "../../components/section/section";
import Subsection from "../../components/subsection/subsection";
import content from "../../constants/data";
// import "./sectionDressCode.style.scss";

const SectionDressCode = () => {
  const _renderClothesSubsection = (data) => {
    return <Subsection {...data}></Subsection>;
  };

  return content.map(({ key, title, content }) => (
    <Section key={key} title={title}>
      {content.map(_renderClothesSubsection)}
    </Section>
  ));
};

export default SectionDressCode;
