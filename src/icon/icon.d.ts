declare namespace IIcons {
  interface svgList {
    test: React.ReactNode;
  }

  type name = keyof svgList;

  interface props {
    name: name;
    size?: number;
    className?: string;
  }
}

export default IIcons;
