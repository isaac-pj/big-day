import React from "react";
import "./section.style.scss";

const Section = ({ title, children }) => {
  return (
    <section className="Section">
      <h1 className="Section__title">{title}</h1>
      <div className="Section__content">{children}</div>
    </section>
  );
};

export default Section;
