import { Models, RematchDispatch, RematchRootState } from "@rematch/core";
import user from "./user";

export interface IRootModel extends Models<IRootModel> {
  user: typeof user;
}
export type TDispatch = RematchDispatch<IRootModel>;
export type TRootState = RematchRootState<IRootModel>;
export const models: IRootModel = { user };
