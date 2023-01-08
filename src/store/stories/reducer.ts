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

      case StoryActionTypes.STORY_LIST_REQUEST:
        draft.fetchLoading = true;
        draft.fetchError = null;
        return;

      case StoryActionTypes.STORY_LIST_SUCCESS:
        draft.items = action.payload.items;
        draft.fetchLoading = false;
        draft.total = action.payload.total;
        return;

      case StoryActionTypes.ALL_STORY_LIST_SUCCESS:
        draft.allItems = action.payload.items;
        draft.fetchLoading = false;
        draft.total = action.payload.total;
        return;

      case StoryActionTypes.STORY_LIST_FAILURE:
        draft.fetchLoading = false;
        draft.fetchError = action.payload;
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
