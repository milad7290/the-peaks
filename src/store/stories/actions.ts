import { ErrorReason } from '../../models/interfaces/other/error-reason.interface';
import { IStory } from './../../models/entities/stories/story-entity.interface';
import { StoryActions, StoryActionTypes } from './types';



export const StorySetPage = (page: number): StoryActions => ({
  type: StoryActionTypes.STORY_SET_PAGE,
  payload: page
});

export const StorySetLimit = (limit: number): StoryActions => ({
  type: StoryActionTypes.STORY_SET_LIMIT,
  payload: limit
});

export const StorySetQuery = (query: string): StoryActions => ({
  type: StoryActionTypes.STORY_SET_QUERY,
  payload: query
});

export const StoryListRequest = (): StoryActions => ({
  type: StoryActionTypes.STORY_LIST_REQUEST
});

export const StoryListSuccess = (payload: {
  items: IStory[];
  offset: number;
  total: number;
}): StoryActions => ({
  type: StoryActionTypes.STORY_LIST_SUCCESS,
  payload
});

export const AllStoryListSuccess = (payload: {
  items: IStory[];
  offset: number;
  total: number;
}): StoryActions => ({
  type: StoryActionTypes.ALL_STORY_LIST_SUCCESS,
  payload
});

export const StoryListFailure = (error?: ErrorReason| null): StoryActions => ({
  type: StoryActionTypes.STORY_LIST_FAILURE,
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