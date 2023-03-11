import { init } from "@rematch/core";
import { models } from "./models";
import { localstorageState } from "./utils";

const store = init({
  models,
  redux: {
    initialState: localstorageState.get(),
  },
});

store.subscribe(() => {
  // const { user } = store.getState();

  // let state: Partial<TRootState> = {};
  // state.user = user;

  // return localstorageState.set(state);
});

export default store;
