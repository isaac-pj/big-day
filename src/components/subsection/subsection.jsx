import classNames from "classnames";
import React from "react";
import Button from "../button/button";
import "./subsection.style.scss";

const Subsection = ({ title, image, description, alert, colors }) => {
  return (
    <div className="Subsection" title={title}>
      <img className="Subsection__image" src={image} alt={title} />
      <div className="Subsection__info">
        <div>
          <h1 className="Subsection__title">{title}</h1>
          <h5 className="Subsection__description">{description}</h5>
          {alert && <span className="Subsection__alert">**{alert}</span>}
        </div>
        <div className="Subsection__colors">
          <div className={classNames("Subsection__color", colors.name)} />
          <div className="Subsection__colorCodes">
            <h4>RGB ({colors.hex})</h4>
            <h4>CMYK ({colors.cmyk})</h4>
          </div>
        </div>
        <div className="Subsection__buttons">
          <Button text="Copiar Cor" />
          <Button text="Imprimir Paleta" />
        </div>
      </div>
    </div>
  );
};

export default Subsection;
