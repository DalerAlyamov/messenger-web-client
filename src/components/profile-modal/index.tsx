import React from "react";

import AnimatedInput from "components/animated-input";
import Button from "components/button";
import Avatar from "components/avatar";
import i from "./i";
import styles from "./styles.module.scss";

const ProfileModal = ({ active, hide }: { active: boolean; hide: () => void }) => {
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

  if (!active) return <></>;
  return (
    <div className={styles.profileModal}>
      <div className={styles.profile}>
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
          placeholder="Старый пароль"
          value={oldpassword.value}
          errorText={oldpassword.errorText}
          onChange={(event) => updateOldpassword({ ...oldpassword, value: event.target.value })}
        />
        <AnimatedInput
          status={password.status}
          type="password"
          placeholder="Новый пароль"
          value={password.value}
          errorText={password.errorText}
          onChange={(event) => updatePassword({ ...password, value: event.target.value })}
        />
        <AnimatedInput
          status={password.status}
          type="password"
          placeholder="Повторите новый пароль"
          value={password2.value}
          errorText={password2.errorText}
          onChange={(event) => updatePassword2({ ...password2, value: event.target.value })}
        />
        <div className={styles.buttonGroup}>
          <Button status={name.value.trim() === "" ? "disabled" : "default"}>Сохранить</Button>
          <Button styleType="outlined" onClick={hide}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
