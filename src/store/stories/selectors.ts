import { createSelector } from "reselect";
import { RootState } from "../root.types";
import { StoryState } from "./types";

export const getStory = (state: RootState) => state.story || ({} as StoryState);

export const getTopHomeStories = createSelector([getStory], (story) => {
  return story.topHomeItems;
});

export const getCatBaseHomeStories = createSelector([getStory], (story) => {
  return story.catBaseHomeItems;
});

export const fetchLoadingTopStory = createSelector([getStory], (story) => {
  return story.fetchTopStoryLoading;
});

export const fetchLoadingCatBaseStory = createSelector([getStory], (story) => {
  return story.fetchCatBaseStoryLoading;
});

export const detailLoadingStory = createSelector([getStory], (story) => {
  return story.detailLoading;
});

export const fetchErrorTopStory = createSelector([getStory], (story) => {
  return story.fetchTopStoryError;
});

export const fetchErrorCatBaseStory = createSelector([getStory], (story) => {
  return story.fetchCatBaseStoryError;
});

export const detailErrorStory = createSelector([getStory], (story) => {
  return story.detailError;
});

export const totalTopStories = createSelector([getStory], (story) => {
  return story.totalTopHome;
});

export const totalCatBaseStories = createSelector([getStory], (story) => {
  return story.totalCatBaseHome;
});

export const selectedStory = createSelector([getStory], (story) => {
  return story.selectedItem;
});

export const generalStateStory = createSelector([getStory], (story) => {
  return story.generalState;
});
