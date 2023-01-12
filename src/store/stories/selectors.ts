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

export const getSearchStories = createSelector([getStory], (story) => {
  return story.searchItems;
});

export const fetchLoadingTopStory = createSelector([getStory], (story) => {
  return story.fetchTopStoryLoading;
});

export const fetchLoadingCatBaseStory = createSelector([getStory], (story) => {
  return story.fetchCatBaseStoryLoading;
});

export const fetchLoadingSearchStory = createSelector([getStory], (story) => {
  return story.fetchSearchStoryLoading;
});

export const fetchLoadingSearchStoryConcat = createSelector([getStory], (story) => {
  return story.fetchSearchStoryConcatLoading;
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

export const fetchErrorSearchStory = createSelector([getStory], (story) => {
  return story.fetchSearchStoryError;
});

export const fetchErrorSearchConcatError = createSelector([getStory], (story) => {
  return story.fetchSearchStoryConcatError;
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

export const totalSearchStories = createSelector([getStory], (story) => {
  return story.totalSearch;
});

export const responsePagesCountSearchStories = createSelector([getStory], (story) => {
  return story.responsePagesCountSearch;
});

export const selectedStory = createSelector([getStory], (story) => {
  return story.selectedItem;
});

export const generalStateStory = createSelector([getStory], (story) => {
  return story.generalState;
});
