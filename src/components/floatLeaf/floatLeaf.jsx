import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import "./floatLeaf.style.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import * as animations from "./floatLeaf.gsap";
import useIsMobile from "../../hooks/useIsMobile";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// *** IMPORT ASSETS ***
import imgEuca from "../../assets/images/euca.png";

const FloatLeaf = ({ mobile, url, ...desktop }) => {
  const isMobile = useIsMobile();
  const floatImageRef = useRef(null);
  const params = isMobile ? { ...desktop, ...mobile } : { ...desktop };
  const { id, reverse, flipX, flipY, position, width, height } = params;

  useEffect(() => {
    const floatImageElem = floatImageRef?.current;
    animations.parallaxDown(gsap, floatImageElem, params);
  }, []);

  const getImageUrl = (path) => {
    return new URL(`../../${path}`, import.meta.url).href;
  };

  return (
    <img
      id={id}
      ref={floatImageRef}
      width={width}
      height={height}
      className={classNames(
        "FloatLeaf",
        { reverse: reverse },
        { flipX: flipX },
        { flipY: flipY }
      )}
      src={url ? getImageUrl(url) : imgEuca}
      alt="Ramo de eucalipto"
      style={{ ...position }}
    />
  );
};

export default FloatLeaf;
