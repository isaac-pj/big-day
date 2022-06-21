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

const FloatLeaf = ({ id, url, reverse, flip, position, scrub, transform }) => {
  const isMobile = useIsMobile();
  const floatImageRef = useRef(null);
  const { desktop, mobile } = position;

  useEffect(() => {
    const floatImageElem = floatImageRef?.current;
    animations.parallaxDown(gsap, floatImageElem, scrub, transform);
  }, []);

  return (
    <img
      id={id}
      ref={floatImageRef}
      className={classNames("FloatLeaf", { reverse: reverse }, { flip: flip })}
      src={url || imgEuca}
      alt="Ramo de eucalipto"
      style={isMobile ? { ...mobile } : { ...desktop }}
    />
  );
};

export default FloatLeaf;
