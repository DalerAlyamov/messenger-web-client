import React from "react";
import classNames from "classnames";

import AnimatedInput from "components/animated-input";
import Button from "components/button";
import Switcher from "./components/switcher";
import t from "./t";
import i from "./i";
import styles from "./styles.module.scss";

let temp = 0;

const Login = () => {
  const [pending, setPending] = React.useState(false);
  const [type, updateType] = React.useState<t.loginMethod>("sign-in");
  const [buttonStatus, updateButtonStatus] = React.useState<t.buttonStatus>("default");

  const [name, updateName] = React.useState<i.input>({
    status: "default",
    errorText: "",
    value: "",
  });
  const [password, updatePassword] = React.useState<i.input>({
    status: "default",
    errorText: "",
    value: "",
  });

  const startPending = () => {
    setPending(true);
    updateButtonStatus("pending");
    updateName((prev) => ({
      ...prev,
      errorText: null,
      status: "pending",
    }));
    updatePassword((prev) => ({
      ...prev,
      errorText: null,
      status: "pending",
    }));
  };

  const stopPending = () => {
    setPending(false);
    updateButtonStatus("default");
    makeDefaultFields();
  };

  const makeDefaultFields = () => {
    updateName((prev) => ({
      ...prev,
      errorText: null,
      status: "default",
    }));
    updatePassword((prev) => ({
      ...prev,
      errorText: null,
      status: "default",
    }));
  };

  const handleUpdateType = (method: t.loginMethod) => {
    updateType(method);
    makeDefaultFields();
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    startPending();
    setTimeout(() => {
      stopPending();
      if (temp === 0) {
        updateName({
          ...name,
          status: "error",
          errorText: "Это имя пользователя уже занято",
        });
        temp++;
      } else if (temp === 1) {
        updateName((prev) => ({
          ...prev,
          status: "error",
        }));
        updatePassword((prev) => ({
          ...prev,
          status: "error",
          errorText: "Неправильно введено имя пользователя или пароль",
        }));
        temp--;
      }
    }, 1000);
  };

  React.useEffect(() => {
    if (name.value === "" || password.value === "") updateButtonStatus("disabled");
    else updateButtonStatus("default");
  }, [name.value, password.value]);

  return (
    <div className={classNames(styles.login, pending && styles.pending)}>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.title}>Chats</div>
        <Switcher value={type} onChange={handleUpdateType} />
        <div className={styles.inputs}>
          <AnimatedInput
            status={name.status}
            placeholder="Логин"
            value={name.value}
            errorText={name.errorText}
            onChange={(event) => updateName({ ...name, value: event.target.value })}
          />
          <AnimatedInput
            status={password.status}
            type="password"
            placeholder="Пароль"
            value={password.value}
            errorText={password.errorText}
            onChange={(event) => updatePassword({ ...password, value: event.target.value })}
          />
        </div>
        <Button status={buttonStatus} type="submit">
          {type === "sign-in" ? "Войти" : "Зарегистрироваться"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
