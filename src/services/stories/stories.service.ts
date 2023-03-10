import { Dispatch } from "react";
import {
  StoryCatBaseListFailure,
  StoryCatBaseListRequest,
  StoryCatBaseListSuccess,
  StoryDetailFailure,
  StoryDetailRequest,
  StoryDetailSuccess,
  StorySearchListConcatFailure,
  StorySearchListConcatRequest,
  StorySearchListConcatSuccess,
  StorySearchListFailure,
  StorySearchListRequest,
  StorySearchListSuccess,
  StoryTopListFailure,
  StoryTopListRequest,
  StoryTopListSuccess,
} from "../../store/stories/actions";
import { HttpProvider } from "../../providers/http.provider";
import { RootActions, RootState, RootThunk } from "../../store/root.types";
import { IStory } from "./../../models/entities/stories/story-entity.interface";
import {
  IGuardianApisResponse,
  IGuardianApisSingleResponse,
} from "../../models/interfaces/other/guardian-apis-response";
import { GenerateUrl } from "../../utils/generate-url";
import { IStoryFilter } from "../../models/interfaces/story/story-filter.interface";

export const fetchTopStories =
  (filters: IStoryFilter): RootThunk<void> =>
  async (dispatch: Dispatch<RootActions>) => {
    dispatch(StoryTopListRequest());
    try {
      const url = GenerateUrl(filters);

      const {
        data: { response },
      } = await HttpProvider<{ response: IGuardianApisResponse }>({
        url,
      });

      if (response.status === "ok") {
        dispatch(
          StoryTopListSuccess({
            items: response.results,
            total: response.total,
          })
        );
      }
    } catch (error: any) {
      const { response } = error;
      dispatch(
        StoryTopListFailure(
          response && response.data
            ? response.data
            : {
                message: "Something went wrong!",
                status: "unknown",
              }
        )
      );
    }
  };

export const fetchCatBaseStories =
  (filters: IStoryFilter): RootThunk<void> =>
  async (dispatch: Dispatch<RootActions>) => {
    dispatch(StoryCatBaseListRequest());
    try {
      const url = GenerateUrl(filters);

      const {
        data: { response },
      } = await HttpProvider<{ response: IGuardianApisResponse }>({
        url,
      });

      if (response.status === "ok") {
        dispatch(
          StoryCatBaseListSuccess({
            items: response.results,
            total: response.total,
          })
        );
      }
    } catch (error: any) {
      const { response } = error;
      dispatch(
        StoryCatBaseListFailure(
          response && response.data
            ? response.data
            : {
                message: "Something went wrong!",
                status: "unknown",
              }
        )
      );
    }
  };

export const fetchSearchStories =
  (filters: IStoryFilter): RootThunk<void> =>
  async (dispatch: Dispatch<RootActions>) => {
    const loadMore = filters.page && filters.page > 1;
    if (loadMore) {
      dispatch(StorySearchListConcatRequest());
    } else {
      dispatch(StorySearchListRequest());
    }
    try {
      const url = GenerateUrl(filters);

      const {
        data: { response },
      } = await HttpProvider<{ response: IGuardianApisResponse }>({
        url,
      });

      if (response.status === "ok") {
        if (loadMore) {
          dispatch(
            StorySearchListConcatSuccess({
              items: response.results,
              total: response.total,
              pages: response.pages,
            })
          );
        } else {
          dispatch(
            StorySearchListSuccess({
              items: response.results,
              total: response.total,
              pages: response.pages,
            })
          );
        }
      }
    } catch (error: any) {
      const { response } = error;
      if (loadMore) {
        dispatch(
          StorySearchListConcatFailure(
            response && response.data
              ? response.data
              : {
                  message: "Something went wrong!",
                  status: "unknown",
                }
          )
        );
      } else {
        StorySearchListFailure(
          response && response.data
            ? response.data
            : {
                message: "Something went wrong!",
                status: "unknown",
              }
        );
      }
    }
  };

export const fetchStory =
  (id: string | null): RootThunk<void> =>
  async (dispatch: Dispatch<RootActions>, getState: () => RootState) => {
    dispatch(StoryDetailRequest());
    try {
      if (id) {
        let url = `${id}`;
        url =
          url +
          GenerateUrl({
            useSearch: false,
            showFields: "headline,trailText,thumbnail,body",
            orderBy: null,
          });

        const {
          data: { response },
        } = await HttpProvider<{ response: IGuardianApisSingleResponse }>({
          url,
        });

        if (response.status === "ok") {
          dispatch(StoryDetailSuccess(response.content));
        } else {
          dispatch(
            StoryDetailFailure({ message: "Not found!", statusCode: 404 })
          );
          return;
        }
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 404
      ) {
        StoryDetailFailure({ message: "Not found!", statusCode: 404 });
      } else {
        const { response } = error;

        dispatch(
          StoryDetailFailure(
            response
              ? response.data
              : {
                  message: "Something went wrong!",
                  statusCode: "unknown",
                }
          )
        );
      }
    }
  };
