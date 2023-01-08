import { createSelector } from "reselect";
import { RootState } from "../root.types";
import { StoryState } from "./types";

export const getStory = (state: RootState) => state.story || ({} as StoryState);

export const getStories = createSelector([getStory], (story) => {
  return story.items;
});

export const getAllStories = createSelector([getStory], (story) => {
  return story.allItems;
});

export const fetchLoadingStory = createSelector([getStory], (story) => {
  return story.fetchLoading;
});

export const detailLoadingStory = createSelector([getStory], (story) => {
  return story.detailLoading;
});

export const fetchErrorStory = createSelector([getStory], (story) => {
  return story.fetchError;
});

export const detailErrorStory = createSelector([getStory], (story) => {
  return story.detailError;
});

export const totalStories = createSelector([getStory], (story) => {
  return story.total;
});

export const selectedStory = createSelector([getStory], (story) => {
  return story.selectedItem;
});

export const generalStateStory = createSelector([getStory], (story) => {
  return story.generalState;
});
