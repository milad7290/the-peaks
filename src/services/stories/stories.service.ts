import { Dispatch } from "react";
import {
  AllStoryListSuccess,
  StoryDetailFailure,
  StoryDetailRequest,
  StoryDetailSuccess,
  StoryListFailure,
  StoryListRequest,
  StoryListSuccess,
} from "../../store/stories/actions";
import { HttpProvider } from "../../providers/http.provider";
import { RootActions, RootState, RootThunk } from "../../store/root.types";
import { IStory } from "./../../models/entities/stories/story-entity.interface";
import { IGuardianApisResponse } from "../../models/interfaces/other/guardian-apis-response";

export const fetchStories =
  (options: {
    page: number | null;
    pageSize: number | null;
    query: string | null;
  }): RootThunk<void> =>
  async (dispatch: Dispatch<RootActions>) => {
    dispatch(StoryListRequest());
    try {
      let url = "";
      if (options.page) {
        url = url + `page=${options.page}&`;
      }
      if (options.pageSize) {
        url = url + `page-size=${options.pageSize}&`;
      }
      if (options.query) {
        url = url + `q=${options.query}&`;
      }
      const { data } = await HttpProvider<IGuardianApisResponse>({
        url,
        // params: { skip, limit, query },
      });

      if (data.status === "ok") {
        dispatch(
          StoryListSuccess({
            items: data.results,
            total: data.total,
          })
        );
      }
    } catch (error: any) {
      const { response } = error;
      dispatch(
        StoryListFailure(
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

export const fetchAllStories =
  (): RootThunk<void> => async (dispatch: Dispatch<RootActions>) => {
    dispatch(StoryListRequest());
    try {
      const { data } = await HttpProvider<IStory[]>({
        url: "/stories/all",
      });

      dispatch(
        AllStoryListSuccess({
          items: data,
          offset: data.length,
          total: data.length,
        })
      );
    } catch (error: any) {
      const { response } = error;
      dispatch(
        StoryListFailure(
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

export const fetchStory =
  (id?: string): RootThunk<void> =>
  async (dispatch: Dispatch<RootActions>, getState: () => RootState) => {
    if (!id || !id.length) {
      dispatch(StoryDetailSuccess(null));
    }
    dispatch(StoryDetailRequest());
    try {
      if (id) {
        const { data } = await HttpProvider<IStory>({
          url: `/stories/${id}`,
        });
        if (!data) {
          dispatch(
            StoryDetailFailure({ message: "Not found!", statusCode: 404 })
          );
          return;
        }

        dispatch(StoryDetailSuccess(data));
      }
    } catch (error: any) {
      const { response } = error;
      dispatch(
        StoryDetailFailure(
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
