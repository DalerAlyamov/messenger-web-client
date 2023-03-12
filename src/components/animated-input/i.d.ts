import t from "./t";

declare namespace i {
  interface props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: "text" | "password";
    status?: t.status;
    errorText?: string | null;
    visibility?: boolean;
    togglVisibility?: () => void;
  }
}

export default i;
