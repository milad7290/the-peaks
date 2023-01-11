import { produce } from "immer";
import {
  StoryActions,
  StoryActionTypes,
  storyInitialState,
  StoryState,
} from "./types";

export default (state: StoryState = storyInitialState, action: StoryActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case StoryActionTypes.STORY_SET_PAGE:
        draft.generalState.page = action.payload;
        return;

      case StoryActionTypes.STORY_SET_PAGE_SIZE:
        draft.generalState.pageSize = action.payload;
        draft.generalState.page = 0;
        return;

      case StoryActionTypes.STORY_SET_QUERY:
        draft.generalState.query = action.payload;
        draft.generalState.page = 0;
        return;

      case StoryActionTypes.STORY_TOP_LIST_REQUEST:
        draft.fetchTopStoryLoading = true;
        draft.fetchTopStoryError = null;
        return;

      case StoryActionTypes.STORY_TOP_LIST_SUCCESS:
        draft.topHomeItems = action.payload.items;
        draft.fetchTopStoryLoading = false;
        draft.totalTopHome = action.payload.total;
        return;

      case StoryActionTypes.STORY_TOP_LIST_FAILURE:
        draft.fetchTopStoryLoading = false;
        draft.fetchTopStoryError = action.payload;
        return;

      case StoryActionTypes.STORY_CAT_BASE_LIST_REQUEST:
        draft.fetchCatBaseStoryLoading = true;
        draft.fetchCatBaseStoryError = null;
        return;

      case StoryActionTypes.STORY_CAT_BASE_LIST_SUCCESS:
        draft.catBaseHomeItems = action.payload.items;
        draft.fetchCatBaseStoryLoading = false;
        draft.totalCatBaseHome = action.payload.total;
        return;

      case StoryActionTypes.STORY_CAT_BASE_LIST_FAILURE:
        draft.fetchCatBaseStoryLoading = false;
        draft.fetchCatBaseStoryError = action.payload;
        return;

      case StoryActionTypes.STORY_SEARCH_LIST_REQUEST:
        draft.fetchSearchStoryLoading = true;
        draft.fetchSearchStoryError = null;
        return;

      case StoryActionTypes.STORY_SEARCH_LIST_SUCCESS:
        draft.searchItems = action.payload.items;
        draft.fetchSearchStoryLoading = false;
        draft.totalSearch = action.payload.total;
        return;

      case StoryActionTypes.STORY_SEARCH_LIST_FAILURE:
        draft.fetchSearchStoryLoading = false;
        draft.fetchSearchStoryError = action.payload;
        return;

      case StoryActionTypes.STORY_SEARCH_LIST_CLEAR:
        draft.generalState.query = "";
        draft.searchItems = [];
        draft.fetchSearchStoryLoading = false;
        draft.totalSearch = 0;
        return;

      case StoryActionTypes.STORY_DETAIL_REQUEST:
        draft.detailLoading = true;
        draft.detailError = null;
        return;

      case StoryActionTypes.STORY_DETAIL_SUCCESS:
        draft.detailLoading = false;
        draft.selectedItem = action.payload;
        return;

      case StoryActionTypes.STORY_DETAIL_FAILURE:
        draft.detailLoading = false;
        draft.detailError = action.payload;
        return;

      default:
        return;
    }
  });
