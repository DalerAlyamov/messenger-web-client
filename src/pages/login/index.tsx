import React from "react";
import classNames from "classnames";

import AnimatedInput from "components/animated-input";
import Button from "components/button";
import request from "request";
import Switcher from "./components/switcher";
import t from "./t";
import i from "./i";
import styles from "./styles.module.scss";
import { AxiosError } from "axios";
import Icon from "icon";

const Login = () => {
  const [pending, setPending] = React.useState(false);
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [commonError, setCommonError] = React.useState<string>();
  const [type, updateType] = React.useState<t.loginMethod>("sign-in");
  const [buttonStatus, updateButtonStatus] = React.useState<t.buttonStatus>("disabled");

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
  const [password2, updatePassword2] = React.useState<i.input>({
    status: "default",
    errorText: "",
    value: "",
  });

  const startPending = () => {
    setPending(true);
    setCommonError(undefined);
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
    updatePassword2((prev) => ({
      ...prev,
      errorText: null,
      status: "pending",
    }));
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
    updatePassword2((prev) => ({
      ...prev,
      errorText: null,
      status: "default",
    }));
  };
  const stopPending = () => {
    setPending(false);
    updateButtonStatus("default");
    makeDefaultFields();
  };

  const handleUpdateType = (method: t.loginMethod) => {
    updateType(method);
    setCommonError(undefined);
    makeDefaultFields();
    updateName((prev) => ({
      ...prev,
      value: "",
    }));
    updatePassword((prev) => ({
      ...prev,
      value: "",
    }));
    updatePassword2((prev) => ({
      ...prev,
      value: "",
    }));
  };
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    startPending();
    let query = type === "sign-up" ? "/signUp" : "/signIn";
    let body = null;
    if (type === "sign-up")
      body = {
        username: name.value,
        password1: password.value,
        password2: password2.value,
      };
    else
      body = {
        username: name.value,
        password: password.value,
      };

    try {
      await request.post(query, body);
      stopPending();
      alert("hi");
    } catch (e) {
      setTimeout(() => {
        const err = e as AxiosError;
        stopPending();
        if (err.response?.status === 409) {
          updateName((prev) => ({
            ...prev,
            status: "error",
            errorText: "Это имя пользователя уже занято",
          }));
        } else if (err.response?.status === 404 || (err.response?.status === 400 && type === "sign-in")) {
          updateName((prev) => ({
            ...prev,
            status: "error",
          }));
          updatePassword((prev) => ({
            ...prev,
            status: "error",
            errorText: "Неправильно введено имя пользователя или пароль",
          }));
        } else if (err.response?.status === 400) {
          if (/^\d/.test(name.value)) {
            updateName((prev) => ({
              ...prev,
              status: "error",
              errorText: "Логин может состоять исключительно из латинских букв",
            }));
          }
          if (name.value.length < 3) {
            updateName((prev) => ({
              ...prev,
              status: "error",
              errorText: "Минимальная длина логина 3 символа",
            }));
          } else if (name.value.length > 24) {
            updateName((prev) => ({
              ...prev,
              status: "error",
              errorText: "Максимальная длина логина 24 символа",
            }));
          } else if (password.value.trim() !== password2.value.trim()) {
            updatePassword((prev) => ({
              ...prev,
              status: "error",
            }));
            updatePassword2((prev) => ({
              ...prev,
              status: "error",
              errorText: "Пароли не совпадают",
            }));
          } else if (password.value.trim().length < 8) {
            updatePassword((prev) => ({
              ...prev,
              status: "error",
              errorText: "Минимальная длина пароля 8 символов",
            }));
          }
        } else setCommonError(err.message);
      }, 400);
    }
  };

  React.useEffect(() => {
    if (name.value === "" || password.value === "" || (password2.value === "" && type === "sign-up"))
      updateButtonStatus("disabled");
    else updateButtonStatus("default");
  }, [name.value, password.value, password2.value, type]);

  return (
    <div className={classNames(styles.login, pending && styles.pending)}>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.title}>Chats</div>
        <div className={styles.group}>
          <Switcher value={type} onChange={handleUpdateType} />
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
            visibility={passwordVisibility}
            togglVisibility={() => setPasswordVisibility(!passwordVisibility)}
          />
          {type === "sign-up" && (
            <AnimatedInput
              status={password2.status}
              type="password"
              placeholder="Подтвердите пароль"
              value={password2.value}
              errorText={password2.errorText}
              onChange={(event) => updatePassword2({ ...password2, value: event.target.value })}
            />
          )}
          {commonError && (
            <div className={styles.error}>
              {commonError}
              <button type="button" className={styles.closeButton} onClick={() => setCommonError(undefined)}>
                <Icon name="close" />
              </button>
            </div>
          )}
        </div>
        <div className={styles.group}>
          <Button status={buttonStatus} type="submit">
            {type === "sign-in" ? "Войти" : "Зарегистрироваться"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
