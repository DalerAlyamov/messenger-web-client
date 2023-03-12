import React from "react";
import classNames from "classnames";

import Icon from "icon";
import i from "./i";
import styles from "./styles.module.scss";

const AnimatedInput: React.FC<i.props> = ({
  status = "default",
  value,
  onChange,
  type = "text",
  placeholder,
  errorText,
  visibility = true,
  togglVisibility,
}) => {
  const isPending = status === "pending";
  return (
    <div className={styles.animatedInput}>
      <div className={classNames(styles.wrap, styles[status], type === "password" && styles.type_password)}>
        <input
          value={value}
          type={!visibility ? "password" : type === "password" ? "text" : type ?? "text"}
          placeholder=" "
          className={styles.input}
          autoComplete="off"
          onChange={(event) => !isPending && onChange(event)}
        />
        {placeholder && <span className={styles.placeholder}>{placeholder}</span>}
        {type === "password" && (
          <button type="button" className={styles.toggleHideButton} onClick={togglVisibility}>
            <Icon name={visibility ? "visibilityOff" : "visibility"} />
          </button>
        )}
      </div>
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
};

export default AnimatedInput;
