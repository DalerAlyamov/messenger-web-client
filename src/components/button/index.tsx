import React from "react";
import classNames from "classnames";

import ButtonLoader from "components/button-loader";
import i from "./i";
import styles from "./styles.module.scss";
import { RippleEffect } from "daler-react-ripple-effect";

const Button: React.FC<i.props> = ({
  status = "default",
  type,
  onClick,
  children,
  styleType = "contained",
}) => {
  const isDefault = status === "default";
  const isPending = status === "pending";

  return (
    <button
      type={type ?? "button"}
      className={classNames(styles.wrap, styles[status], styles[styleType])}
      onClick={(event) => {
        if (!isDefault) return event.preventDefault();
        onClick?.(event);
      }}
    >
      <RippleEffect className={styles.button} color="rgba(255, 255, 255, 0.1)">
        {isPending && <ButtonLoader />}
        {!isPending && children}
      </RippleEffect>
    </button>
  );
};

export default Button;
