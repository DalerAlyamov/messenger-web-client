import t from "./t";

declare namespace i {
  interface input {
    status: t.inputStatus;
    value: string;
    errorText?: string | null;
  }
}

export default i;
