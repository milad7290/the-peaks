import { ErrorReason } from "../../models/interfaces/other/error-reason.interface";
import { GeneralState } from "../../models/interfaces/other/general-state.interface";
import { Action } from "../root.types";
import { IStory } from "../../models/entities/stories/story-entity.interface";

export type StoryState = {
  generalState: GeneralState;
  totalTopHome: number;
  totalCatBaseHome: number;
  totalSearch: number;
  responsePagesCountSearch: number;
  topHomeItems: IStory[];
  catBaseHomeItems: IStory[];
  searchItems: IStory[];
  selectedItem?: IStory | null;
  fetchTopStoryLoading: boolean;
  fetchCatBaseStoryLoading: boolean;
  fetchSearchStoryLoading: boolean;
  fetchSearchStoryConcatLoading: boolean;
  detailLoading: boolean;
  fetchTopStoryError?: ErrorReason | null;
  fetchCatBaseStoryError?: ErrorReason | null;
  fetchSearchStoryError?: ErrorReason | null;
  fetchSearchStoryConcatError?:ErrorReason | null;
  detailError?: ErrorReason | null;
};

export const storyInitialState: StoryState = Object.freeze({
  generalState: {
    pageSize: 15,
    page: 1,
    query: "",
  },
  totalTopHome: 0,
  totalCatBaseHome: 0,
  totalSearch: 0,
  responsePagesCountSearch: 0,
  topHomeItems: [],
  catBaseHomeItems: [],
  searchItems: [],
  fetchTopStoryLoading: false,
  fetchCatBaseStoryLoading: false,
  fetchSearchStoryLoading: false,
  fetchSearchStoryConcatLoading: false,
  detailLoading: false,
});

export enum StoryActionTypes {
  STORY_SET_PAGE = "story/set/page",
  STORY_SET_PAGE_SIZE = "story/set/page_size",
  STORY_SET_QUERY = "story/set/query",
  STORY_TOP_LIST_REQUEST = "story/top_list/request",
  STORY_TOP_LIST_SUCCESS = "story/top_list/success",
  STORY_TOP_LIST_FAILURE = "story/top_list/failure",
  STORY_CAT_BASE_LIST_REQUEST = "story/cat_base_list/request",
  STORY_CAT_BASE_LIST_SUCCESS = "story/cat_base_list/success",
  STORY_CAT_BASE_LIST_FAILURE = "story/cat_base_list/failure",
  STORY_SEARCH_LIST_REQUEST = "story/search/request",
  STORY_SEARCH_LIST_SUCCESS = "story/search/success",
  STORY_SEARCH_LIST_FAILURE = "story/search/failure",
  STORY_SEARCH_CONCAT_LIST_REQUEST = "story/search_concat/request",
  STORY_SEARCH_CONCAT_LIST_SUCCESS = "story/search_concat/success",
  STORY_SEARCH_CONCAT_LIST_FAILURE = "story/search_concat/failure",
  STORY_SEARCH_LIST_CLEAR = "story/search/clear",
  STORY_DETAIL_REQUEST = "story/detail/request",
  STORY_DETAIL_SUCCESS = "story/detail/success",
  STORY_DETAIL_FAILURE = "story/detail/failure",
}

interface StorySetPageAction extends Action {
  type: typeof StoryActionTypes.STORY_SET_PAGE;
  payload: number;
}

interface StorySetPageSizeAction extends Action {
  type: typeof StoryActionTypes.STORY_SET_PAGE_SIZE;
  payload: number;
}

interface StorySetQueryAction extends Action {
  type: typeof StoryActionTypes.STORY_SET_QUERY;
  payload: string;
}

interface TopStoryRequestAction extends Action {
  type: typeof StoryActionTypes.STORY_TOP_LIST_REQUEST;
}

interface TopStorySuccessAction extends Action {
  type: typeof StoryActionTypes.STORY_TOP_LIST_SUCCESS;
  payload: {
    items: IStory[];
    total: number;
  };
}
interface TopStoryFailureAction extends Action {
  type: typeof StoryActionTypes.STORY_TOP_LIST_FAILURE;
  payload: ErrorReason | null | undefined;
}

interface CatBaseStoryRequestAction extends Action {
  type: typeof StoryActionTypes.STORY_CAT_BASE_LIST_REQUEST;
}

interface CatBaseStorySuccessAction extends Action {
  type: typeof StoryActionTypes.STORY_CAT_BASE_LIST_SUCCESS;
  payload: {
    items: IStory[];
    total: number;
  };
}
interface CatBaseStoryFailureAction extends Action {
  type: typeof StoryActionTypes.STORY_CAT_BASE_LIST_FAILURE;
  payload: ErrorReason | null | undefined;
}

interface SearchStoryRequestAction extends Action {
  type: typeof StoryActionTypes.STORY_SEARCH_LIST_REQUEST;
}

interface SearchStorySuccessAction extends Action {
  type: typeof StoryActionTypes.STORY_SEARCH_LIST_SUCCESS;
  payload: {
    items: IStory[];
    total: number;
    pages: number;
  };
}
interface SearchStoryFailureAction extends Action {
  type: typeof StoryActionTypes.STORY_SEARCH_LIST_FAILURE;
  payload: ErrorReason | null | undefined;
}

interface SearchStoryConcatRequestAction extends Action {
  type: typeof StoryActionTypes.STORY_SEARCH_CONCAT_LIST_REQUEST;
}

interface SearchStoryConcatSuccessAction extends Action {
  type: typeof StoryActionTypes.STORY_SEARCH_CONCAT_LIST_SUCCESS;
  payload: {
    items: IStory[];
    total: number;
    pages: number;
  };
}
interface SearchStoryConcatFailureAction extends Action {
  type: typeof StoryActionTypes.STORY_SEARCH_CONCAT_LIST_FAILURE;
  payload: ErrorReason | null | undefined;
}

interface SearchStoryClearAction extends Action {
  type: typeof StoryActionTypes.STORY_SEARCH_LIST_CLEAR;
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
  | StorySetPageSizeAction
  | StorySetQueryAction
  | TopStoryRequestAction
  | TopStorySuccessAction
  | TopStoryFailureAction
  | CatBaseStoryRequestAction
  | CatBaseStorySuccessAction
  | CatBaseStoryFailureAction
  | SearchStoryRequestAction
  | SearchStorySuccessAction
  | SearchStoryFailureAction
  | SearchStoryConcatRequestAction
  | SearchStoryConcatSuccessAction
  | SearchStoryConcatFailureAction
  | SearchStoryClearAction
  | StoryDetailRequestAction
  | StoryDetailSuccessAction
  | StoryDetailFailureAction;
