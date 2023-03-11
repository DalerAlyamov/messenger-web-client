import React from "react";

import Topbar from "../topbar";
import styles from "./styles.module.scss";

const Sidebar = ({ updateWidth }: { updateWidth: (width: number) => void }) => {
  const [resizeIsActive, setResizeActive] = React.useState(false);

  const handleResizeStart = (event: React.MouseEvent) => {
    event.preventDefault();
    setResizeActive(true);
  };

  React.useEffect(() => {
    (document.body as HTMLBodyElement).style.cursor = resizeIsActive ? "ew-resize" : "auto";

    if (!resizeIsActive) return;
    const handleResize = (event: MouseEvent) => {
      event.preventDefault();
      const mouseX: number = event.clientX;
      updateWidth(Math.min(Math.max(mouseX, 256), 630));
    };
    const handleResizeEnd = () => setResizeActive(false);

    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", handleResizeEnd);
    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("mouseup", handleResizeEnd);
    };
  }, [resizeIsActive, updateWidth]);

  return (
    <div className={styles.sidebar}>
      <Topbar />
      <div className={styles.resizeHandler} onMouseDown={handleResizeStart} />
    </div>
  );
};

export default Sidebar;
