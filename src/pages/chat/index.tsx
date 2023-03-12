import React from "react";
import classNames from "classnames";
import ReactTextareaAutosize from "react-textarea-autosize";

import Avatar from "components/avatar";
import Icon from "icon";
import styles from "./styles.module.scss";

const Chat = () => {
  const inputRef = React.useRef<HTMLTextAreaElement | null>(null);

  const [inputValue, setInputValue] = React.useState("");
  const [userOnline, updateUserOnline] = React.useState(false);

  const handleSend = () => {
    setInputValue("");
    inputRef.current?.focus();
  };

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (inputValue.trim() === "") return;
      handleSend();
    }
  }

  return (
    <div className={styles.chat}>
      <div className={styles.topbar}>
        <Avatar />
        <div className={styles.title}>
          <span className={styles.name}>Daler Alyamov</span>
          <span className={classNames(styles.status, userOnline && styles.active)}>
            {userOnline ? "В сети" : "Не в сети"}
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.messageList}></div>
      </div>
      <div className={styles.inputContainer}>
        <ReactTextareaAutosize
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className={styles.input}
          placeholder="Сообщение"
          onKeyDown={handleKeyDown}
        />
        <button className={styles.sendButton} onClick={handleSend}>
          <Icon name="messageSend" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
