import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Icon from "icon";
import { useDispatch } from "store/hooks";
import styles from "./styles.module.scss";
import ProfileModal from "components/profile-modal";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileModalState, setProfileModalState] = React.useState(false);
  const [dropdownMenuState, setDropdownMenuState] = React.useState(false);
  const [searchValue, updateSearchValue] = React.useState("");
  const [searchFocused, setSearchFocused] = React.useState(false);

  const handleOpenProfile = () => setProfileModalState(true);

  const handleLogout = () => navigate("login");

  React.useEffect(() => {
    if (!dropdownMenuState) return;
    const handleClick = () => {
      setDropdownMenuState(false);
      dispatch.cover.hide();
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [dispatch.cover, dropdownMenuState]);

  return (
    <>
      <div className={styles.topbar}>
        <button
          className={classNames(
            styles.topbarMenuButton,
            dropdownMenuState && styles.active,
            searchFocused && styles.type_back
          )}
          onClick={(e) => {
            e.stopPropagation();
            if (searchFocused) {
              updateSearchValue("");
              setSearchFocused(false);
            } else {
              setDropdownMenuState(true);
              dispatch.cover.show();
            }
          }}
        >
          <Icon name="arrowBack" className={styles.arrowIcon} />
          <Icon name="menuBurger" className={styles.burgerIcon} />
        </button>
        <div className={styles.searchBox} draggable={false}>
          <div className={styles.searchField}>
            <Icon size={22} name="search" className={styles.searchIcon} />
            <input
              draggable={false}
              value={searchValue}
              onChange={(e) => updateSearchValue(e.target.value)}
              type="text"
              className={styles.searchInput}
              placeholder="Поиск"
              onFocus={() => setSearchFocused(true)}
            />
          </div>
        </div>
        <CSSTransition
          unmountOnExit
          in={dropdownMenuState}
          timeout={140}
          classNames={{
            enter: styles.dropdownMenuEnter,
            enterActive: styles.dropdownMenuEnterActive,
            exit: styles.dropdownMenuExit,
            exitActive: styles.dropdownMenuExitActive,
          }}
        >
          <div className={styles.dropdownMenu}>
            <button draggable={false} className={styles.dropdownItem} onClick={handleOpenProfile}>
              <Icon size={20} name="user" className={styles.itemIcon} />
              Профиль
            </button>
            <button draggable={false} className={styles.dropdownItem} onClick={handleLogout}>
              <Icon size={20} name="logOut" className={styles.itemIcon} />
              Выход
            </button>
          </div>
        </CSSTransition>
      </div>
      <ProfileModal active={profileModalState} hide={() => setProfileModalState(false)} />
    </>
  );
};

export default Topbar;
