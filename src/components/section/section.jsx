import React from "react";
import "./section.style.scss";

const Section = ({ title, children, id }) => {
  return (
    <section id={id} className="Section">
      {title && <h1 className="Section__title">{title}</h1>}
      <div className="Section__content">{children}</div>
    </section>
  );
};

export default Section;
