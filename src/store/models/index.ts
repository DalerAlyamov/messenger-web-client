import { Models, RematchDispatch, RematchRootState } from "@rematch/core";
import user from "./user";
import cover from "./cover";

export interface IRootModel extends Models<IRootModel> {
  user: typeof user;
  cover: typeof cover;
}
export type TDispatch = RematchDispatch<IRootModel>;
export type TRootState = RematchRootState<IRootModel>;
export const models: IRootModel = { user, cover };
