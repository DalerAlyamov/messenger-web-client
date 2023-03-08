import { createModel } from "@rematch/core";
import { IRootModel } from ".";

const user = createModel<IRootModel>()({
  state: null,
  reducers: {
    test() {
      return null;
    },
  },
});

export default user;
