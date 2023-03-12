import React from "react";
import { CSSTransition } from "react-transition-group";

import AnimatedInput from "components/animated-input";
import Button from "components/button";
import Avatar from "components/avatar";
import i from "./i";
import styles from "./styles.module.scss";

const ProfileModal = ({ active, hide }: { active: boolean; hide: () => void }) => {
  const [oldpasswordVisibility, setOldpasswordVisibility] = React.useState(false);
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [name, updateName] = React.useState<i.input>({
    status: "default",
    errorText: "",
    value: "",
  });
  const [oldpassword, updateOldpassword] = React.useState<i.input>({
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

  const handleCancel = () => hide();
  return (
    <CSSTransition
      unmountOnExit
      in={active}
      timeout={140}
      classNames={{
        enter: styles.fadeEnter,
        enterActive: styles.fadeEnterActive,
        exit: styles.fadeExit,
        exitActive: styles.fadeExitActive,
      }}
    >
      <div className={styles.profileModal} onMouseDown={() => hide()}>
        <div className={styles.profile} onMouseDown={(e) => e.stopPropagation()}>
          <Avatar />
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
            visibility={oldpasswordVisibility}
            togglVisibility={() => setOldpasswordVisibility(!oldpasswordVisibility)}
            placeholder="Старый пароль"
            value={oldpassword.value}
            errorText={oldpassword.errorText}
            onChange={(event) => updateOldpassword({ ...oldpassword, value: event.target.value })}
          />
          <AnimatedInput
            status={password.status}
            type="password"
            visibility={passwordVisibility}
            togglVisibility={() => setPasswordVisibility(!passwordVisibility)}
            placeholder="Новый пароль"
            value={password.value}
            errorText={password.errorText}
            onChange={(event) => updatePassword({ ...password, value: event.target.value })}
          />
          <AnimatedInput
            status={password.status}
            visibility={passwordVisibility}
            placeholder="Повторите новый пароль"
            value={password2.value}
            errorText={password2.errorText}
            onChange={(event) => updatePassword2({ ...password2, value: event.target.value })}
          />
          <div className={styles.buttonGroup}>
            <Button status={name.value.trim() === "" ? "disabled" : "default"}>Сохранить</Button>
            <Button styleType="outlined" onClick={handleCancel}>
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProfileModal;
