import React from "react";
import classNames from "classnames";

import i from "pages/login/i";
import styles from "./styles.module.scss";

const Switcher: React.FC<i.switcher> = (props) => {
  return (
    <div className={styles.switcher}>
      <button
        type="button"
        className={classNames(styles.button, props.value === "sign-in" && styles.selected)}
        onClick={() => props.onChange("sign-in")}
      >
        Вход
      </button>
      <button
        type="button"
        className={classNames(styles.button, props.value === "sign-up" && styles.selected)}
        onClick={() => props.onChange("sign-up")}
      >
        Регистрация
      </button>
    </div>
  );
};

export default Switcher;
