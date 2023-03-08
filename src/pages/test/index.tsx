import React from "react";

import AnimatedInput from "components/animated-input";
import styles from "./styles.module.scss";

const Test = () => {
  const [name, updateName] = React.useState("");

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <AnimatedInput value={name} onChange={(e) => updateName(e.target.value)} placeholder="Логин" />
      </div>
    </div>
  );
};

export default Test;
