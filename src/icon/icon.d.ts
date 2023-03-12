declare namespace IIcon {
  interface svgList {
    close: React.ReactNode;
    menuBurger: React.ReactNode;
    camera: React.ReactNode;
    messageSend: React.ReactNode;
    arrowBack: React.ReactNode;
    visibility: React.ReactNode;
    visibilityOff: React.ReactNode;
    search: React.ReactNode;
    logOut: React.ReactNode;
    user: React.ReactNode;
  }

  type name = keyof svgList;

  interface props {
    name: name;
    size?: number;
    className?: string;
  }
}

export default IIcon;
