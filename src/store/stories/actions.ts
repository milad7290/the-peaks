import { ErrorReason } from '../../models/interfaces/other/error-reason.interface';
import { IStory } from './../../models/entities/stories/story-entity.interface';
import { StoryActions, StoryActionTypes } from './types';



export const StorySetPage = (page: number): StoryActions => ({
  type: StoryActionTypes.STORY_SET_PAGE,
  payload: page
});

export const StorySetPageSize = (pageSize: number): StoryActions => ({
  type: StoryActionTypes.STORY_SET_PAGE_SIZE,
  payload: pageSize
});

export const StorySetQuery = (query: string): StoryActions => ({
  type: StoryActionTypes.STORY_SET_QUERY,
  payload: query
});

export const StoryTopListRequest = (): StoryActions => ({
  type: StoryActionTypes.STORY_TOP_LIST_REQUEST
});

export const StoryTopListSuccess = (payload: {
  items: IStory[];
  total: number;
}): StoryActions => ({
  type: StoryActionTypes.STORY_TOP_LIST_SUCCESS,
  payload
});

export const StoryTopListFailure = (error?: ErrorReason| null): StoryActions => ({
  type: StoryActionTypes.STORY_TOP_LIST_FAILURE,
  payload: error
});


export const StoryCatBaseListRequest = (): StoryActions => ({
  type: StoryActionTypes.STORY_CAT_BASE_LIST_REQUEST
});

export const StoryCatBaseListSuccess = (payload: {
  items: IStory[];
  total: number;
}): StoryActions => ({
  type: StoryActionTypes.STORY_CAT_BASE_LIST_SUCCESS,
  payload
});

export const StoryCatBaseListFailure = (error?: ErrorReason| null): StoryActions => ({
  type: StoryActionTypes.STORY_CAT_BASE_LIST_FAILURE,
  payload: error
});

export const StoryDetailRequest = (): StoryActions => ({
  type: StoryActionTypes.STORY_DETAIL_REQUEST
});

export const StoryDetailSuccess = (item: IStory | null): StoryActions => ({
  type: StoryActionTypes.STORY_DETAIL_SUCCESS,
  payload: item
});

export const StoryDetailFailure = (
  error?: ErrorReason
): StoryActions => ({
  type: StoryActionTypes.STORY_DETAIL_FAILURE,
  payload: error
});