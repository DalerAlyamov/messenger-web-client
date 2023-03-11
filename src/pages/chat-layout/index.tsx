import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./components/sidebar";
import styles from "./styles.module.scss";

const ChatLayout = () => {
  const [sidebarWidth, updateSidebarWidth] = React.useState(340);

  return (
    <div className={styles.chatLayout} style={{ gridTemplateColumns: sidebarWidth + "px 1fr" }}>
      <Sidebar updateWidth={updateSidebarWidth} />
      <Outlet />
    </div>
  );
};

export default ChatLayout;
