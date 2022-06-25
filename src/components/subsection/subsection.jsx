import React, { useRef, useEffect } from "react";
import "./subsection.style.scss";
import classNames from "classnames";
import Button from "../button/button";
import useIsMobile from "../../hooks/useIsMobile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Toast from "../toast/toast";
import * as animations from "./subsection.gsap";
import useHasPermission from "../../hooks/useHasPermission";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Subsection = ({ title, image, description, alert, colors, reverse }) => {
  const toastSuccessRef = useRef(null);
  const toastFailRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const isMobile = useIsMobile();
  const hasPermission = useHasPermission("clipboard-write");
  const { src, height, width } = image;

  useEffect(() => {
    const imageElem = imageRef.current;
    const infoElem = infoRef.current;
    const containerElem = containerRef.current;
    const reverse = JSON.parse(infoElem?.dataset?.reverse);

    animations.scaleUp(gsap, imageElem, isMobile ? imageElem : containerElem);
    animations.slideIn(gsap, infoElem, isMobile ? infoElem : containerElem, {
      reverse,
    });
  }, []);

  const getImageUrl = (path) => {
    return new URL(`../../assets/images/clothes/${path}`, import.meta.url).href;
  };

  const handleCopyColor = async (event, { name, hex, cmyk }) => {
    const color = `${name}: HEX: (${hex}) CMYK: (${cmyk})`;
    if (!hasPermission) return;
    try {
      await navigator.clipboard.writeText(color);
      toastSuccessRef.current.showToast();
    } catch (err) {
      toastFailRef.current.showToast();
    }
  };

  const handlePrintPallete = () => {
    gsap.to(window, { duration: 2, scrollTo: "#colors" });
  };

  return (
    <div
      ref={containerRef}
      className={classNames("Subsection", { reverse: reverse })}
      title={title}
    >
      <img
        ref={imageRef}
        className="Subsection__image"
        height={height}
        width={width}
        src={getImageUrl(src)}
        alt={title}
      />
      <div ref={infoRef} data-reverse={reverse} className="Subsection__info">
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
          <Button
            text="Copiar Cor"
            onClick={(e) => handleCopyColor(e, colors)}
          />
          <Button text="Imprimir Paleta" onClick={handlePrintPallete} />
        </div>
      </div>
      <Toast
        ref={toastSuccessRef}
        message=":) A cor foi copiada com sucesso!"
        timeout={3000}
      />
      <Toast
        ref={toastFailRef}
        message=":( Desculpe, houve um erro ao copiar!"
        timeout={3000}
      />
    </div>
  );
};

export default Subsection;
