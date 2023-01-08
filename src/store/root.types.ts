import { ThunkAction } from "redux-thunk";
import RootReducer from './root.reducer';

import {
  StoryActions,
  StoryActionTypes,
  storyInitialState,
} from "./stories/types";

export type RootState = ReturnType<typeof RootReducer>;
export const rootInitialState: RootState = {
  story: storyInitialState,
};

export const RootActionTypes = Object.assign(
  {},

  StoryActionTypes
);

export type RootActions = StoryActions;

export type Action = {
  type: string;
  payload?: any;
};

export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootActions
>;
