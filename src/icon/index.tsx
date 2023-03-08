import React from "react";
import IIcons from "./icon";
import list from "./svg-list";

const Icons: React.FC<IIcons.props> = React.memo(
  ({ size = 24, name, className }): JSX.Element => (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <svg
        viewBox="0 0 24 24"
        style={{ width: size + "px", height: size + "px" }}
        fill="currentColor"
      >
        {list[name]}
      </svg>
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name && prevProps.size === nextProps.size
);

export default Icons;
