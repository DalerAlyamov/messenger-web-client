import React from "react";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "store/hooks";
import styles from "./styles.module.scss";

const Cover = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch.cover.hide();
  }, [dispatch.cover, location.pathname]);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).id === "cover") dispatch.cover.hide();
    };

    window.addEventListener("click", handleClick);
    return () => window.addEventListener("click", handleClick);
  }, [dispatch.cover]);

  const cover = useSelector((state) => state.cover);
  if (cover) return <div id="cover" className={styles.cover} />;
  else return <></>;
};

export default Cover;
