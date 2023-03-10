declare namespace IIcon {
  interface svgList {
    close: React.ReactNode;
  }

  type name = keyof svgList;

  interface props {
    name: name;
    size?: number;
    className?: string;
  }
}

export default IIcon;
