import classNames from "classnames";
import React, { forwardRef, memo } from "react";
import { BUTTON_TYPES } from "../../constants/general";
import Icon from "../icon/Icon";
import "./button.style.scss";

const Button = (
  { type = BUTTON_TYPES.RAISED, text = "button", icon, onClick },
  ref
) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={classNames("Button", type, icon && "ICON")}
    >
      {icon && <Icon name={icon} />}
      {text && type != BUTTON_TYPES.FAB && (
        <span className="Button__text">{text}</span>
      )}
    </button>
  );
};

export default memo(forwardRef(Button));
