import classNames from "classnames";
import React from "react";
import "./floatImage.style.scss";

const FloatImage = ({ url, reverse, top, bottom, left, right }) => {
  return (
    <img
      className={classNames("FloatImage", { reverse: reverse })}
      src={url || "src/assets/images/euca.png"}
      alt="Ramo de eucalipto"
      style={{ left: left, right: right, top: top, bottom: bottom }}
    />
  );
};

export default FloatImage;
