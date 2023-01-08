import { ErrorReason } from "../../models/interfaces/other/error-reason.interface";
import { GeneralState } from "../../models/interfaces/other/general-state.interface";
import { Action } from "../root.types";
import { IStory } from "../../models/entities/stories/story-entity.interface";

export type StoryState = {
  generalState: GeneralState;
  total: number;
  items: IStory[];
  allItems: IStory[];
  selectedItem?: IStory | null;
  fetchLoading: boolean;
  detailLoading: boolean;
  fetchError?: ErrorReason | null;
  detailError?: ErrorReason | null;
};

export const storyInitialState: StoryState = Object.freeze({
  generalState: {
    limit: 25,
    page: 0,
    query: "",
  },
  total: 0,
  items: [],
  allItems: [],
  fetchLoading: false,
  detailLoading: false,
});

export enum StoryActionTypes {
  STORY_SET_PAGE = "story/set/page",
  STORY_SET_LIMIT = "story/set/limit",
  STORY_SET_QUERY = "story/set/query",
  STORY_LIST_REQUEST = "story/list/request",
  STORY_LIST_SUCCESS = "story/list/success",
  ALL_STORY_LIST_SUCCESS = "allRequest/list/success",
  STORY_LIST_FAILURE = "story/list/failure",
  STORY_DETAIL_REQUEST = "story/detail/request",
  STORY_DETAIL_SUCCESS = "story/detail/success",
  STORY_DETAIL_FAILURE = "story/detail/failure",
}

interface StorySetPageAction extends Action {
  type: typeof StoryActionTypes.STORY_SET_PAGE;
  payload: number;
}

interface StorySetLimitAction extends Action {
  type: typeof StoryActionTypes.STORY_SET_LIMIT;
  payload: number;
}

interface StorySetQueryAction extends Action {
  type: typeof StoryActionTypes.STORY_SET_QUERY;
  payload: string;
}

interface StoryRequestAction extends Action {
  type: typeof StoryActionTypes.STORY_LIST_REQUEST;
}

interface StorySuccessAction extends Action {
  type: typeof StoryActionTypes.STORY_LIST_SUCCESS;
  payload: {
    items: IStory[];
    offset: number;
    total: number;
  };
}

interface AllStorySuccessAction extends Action {
  type: typeof StoryActionTypes.ALL_STORY_LIST_SUCCESS;
  payload: {
    items: IStory[];
    offset: number;
    total: number;
  };
}

interface StoryFailureAction extends Action {
  type: typeof StoryActionTypes.STORY_LIST_FAILURE;
  payload: ErrorReason | null | undefined;
}

interface StoryDetailRequestAction extends Action {
  type: typeof StoryActionTypes.STORY_DETAIL_REQUEST;
}

interface StoryDetailSuccessAction extends Action {
  type: typeof StoryActionTypes.STORY_DETAIL_SUCCESS;
  payload: IStory | null;
}

interface StoryDetailFailureAction extends Action {
  type: typeof StoryActionTypes.STORY_DETAIL_FAILURE;
  payload: ErrorReason | null | undefined;
}

export type StoryActions =
  | StorySetPageAction
  // | JustAddedStoryAction
  | StorySetLimitAction
  | StorySetQueryAction
  | StoryRequestAction
  | StorySuccessAction
  | AllStorySuccessAction
  | StoryFailureAction
  | StoryDetailRequestAction
  | StoryDetailSuccessAction
  | StoryDetailFailureAction;
