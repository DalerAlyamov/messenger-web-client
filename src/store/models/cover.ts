import { createModel } from "@rematch/core";
import { IRootModel } from ".";

const cover = createModel<IRootModel>()({
  state: false,
  reducers: {
    show() {
      return true;
    },
    hide() {
      return false;
    },
  },
});

export default cover;
