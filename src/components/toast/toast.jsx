import classNames from "classnames";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./toast.style.scss";

const Toast = ({ message, children, timeout }, ref) => {
  const [visibility, setVisibility] = useState(false);

  const showToast = () => {
    setVisibility(true);
    return setTimeout(() => {
      setVisibility(false);
    }, timeout);
  };

  useImperativeHandle(ref, () => {
    return {
      showToast,
    };
  });

  return (
    <div ref={ref} className={classNames("Toast", { hide: !visibility })}>
      <div className="Toast__inner">{message || children}</div>
    </div>
  );
};

export default forwardRef(Toast);
