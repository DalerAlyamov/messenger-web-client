import React from "react";
import classNames from "classnames";

import LoadingRipple from "components/loading-ripple";
import i from "./i";
import styles from "./styles.module.scss";

const Button: React.FC<i.props> = ({ status = "default", type, onClick, children }) => {
  const isDefault = status === "default";
  const isPending = status === "pending";

  return (
    <button
      type={type ?? "button"}
      className={classNames(styles.button, styles[status])}
      onClick={(event) => isDefault && onClick?.(event)}
    >
      {isPending && <LoadingRipple />}
      {!isPending && children}
    </button>
  );
};

export default Button;
