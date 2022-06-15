import React, { forwardRef } from "react";
import {
  COLOR_PALLETE,
  COLOR_PALLETE_STYLE,
  PALLETE,
} from "../../constants/general";
import "./colorPallete.style.scss";

const ColorPallete = (props, ref) => {
  const handleClickColor = (event, { HEX, CMYK, NAME }) => {
    const color = `${NAME}: HEX: (${HEX}) CMYK: (${CMYK})`;
    navigator.clipboard.writeText(color);
    // console.log("copy to clipboard");
  };

  return (
    <div ref={ref} className="ColorPallete">
      <div className="ColorPallete__colorsFrame">
        {PALLETE.map((KEY) => (
          <div
            key={KEY}
            className="ColorPallete__color"
            style={COLOR_PALLETE_STYLE[KEY]}
            onClick={(e) => handleClickColor(e, COLOR_PALLETE[KEY])}
          >
            <span className="ColorPallete__name">
              {COLOR_PALLETE[KEY]?.NAME}
            </span>
            <div className="ColorPallete__codes">
              <span className="ColorPallete__hexCode">
                {COLOR_PALLETE[KEY]?.HEX}
              </span>
              <span className="ColorPallete__cmykCode">
                ({COLOR_PALLETE[KEY]?.CMYK})
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="ColorPallete__description">
        <span className="ColorPallete__title">Paleta de Cores</span>
        <span className="ColorPallete__rightContent">
          <span className="ColorPallete__names">Isaac & Letícia</span>
          <span className="ColorPallete__date">30 de Julho, 2022</span>
        </span>
      </div>
    </div>
  );
};

export default forwardRef(ColorPallete);
