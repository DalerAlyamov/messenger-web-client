import React from "react";
import classNames from "classnames";

import ButtonLoader from "components/button-loader";
import i from "./i";
import styles from "./styles.module.scss";

const Button: React.FC<i.props> = ({ status = "default", type, onClick, children, styleType="contained" }) => {
  const isDefault = status === "default";
  const isPending = status === "pending";

  return (
    <button
      type={type ?? "button"}
      className={classNames(styles.button, styles[status], styles[styleType])}
      onClick={(event) => isDefault && onClick?.(event)}
    >
      {isPending && <ButtonLoader />}
      {!isPending && children}
    </button>
  );
};

export default Button;
