import { init } from "@rematch/core";
import { models, TRootState } from "./models";
import { localstorageState } from "./utils";

const store = init({
  models,
  redux: {
    initialState: localstorageState.get(),
  },
});

store.subscribe(() => {
  const { user } = store.getState();

  let state: Partial<TRootState> = {};
  state.user = user;

  return localstorageState.set(state);
});

export default store;
