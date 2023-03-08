import t from "./t";

declare namespace i {
  interface input {
    status: t.inputStatus;
    value: string;
    errorText?: string | null;
  }
  interface switcher {
    value: Type.loginMethod;
    onChange: (method: t.loginMethod) => void;
  }
}

export default i;
