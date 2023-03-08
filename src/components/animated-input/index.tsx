import React from "react";
import classNames from "classnames";

import i from "./i";
import styles from "./styles.module.scss";

const AnimatedInput: React.FC<i.props> = ({
  status = "default",
  value,
  onChange,
  type = "text",
  placeholder,
  errorText,
}) => {
  const isPending = status === "pending";

  return (
    <div className={styles.animatedInput}>
      <div className={classNames(styles.wrap, styles[status])}>
        <input
          value={value}
          type={type ?? "text"}
          placeholder=" "
          className={styles.input}
          onChange={(event) => !isPending && onChange(event)}
        />
        {placeholder && <span className={styles.placeholder}>{placeholder}</span>}
      </div>
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
};

export default AnimatedInput;
