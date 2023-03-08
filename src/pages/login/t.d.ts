import tButton from "components/button/t";
import tInput from "components/animated-input/t";

declare namespace t {
  type buttonStatus = tButton.status;
  type inputStatus = tInput.status;
  type loginMethod = "sign-in" | "sign-up";
}

export default t;
