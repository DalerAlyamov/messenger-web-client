import t from "./t";

declare namespace i {
  interface props {
    children: React.ReactNode;
    status?: t.status;
    type?: "button" | "submit";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
}

export default i;
