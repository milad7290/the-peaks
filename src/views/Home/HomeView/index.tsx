import React, { FC, useCallback, useEffect } from "react";
import Page from "../../../components/Page";
import { fetchStories } from "../../../services/stories/stories.service";
import { useDispatch, useSelector } from "react-redux";
import { generalStateStory } from "../../../store/stories/selectors";
import type {} from 'redux-thunk/extend-redux'

const HomeView: FC = () => {
  const dispatch = useDispatch();
  const generalState = useSelector(generalStateStory);

  const getData = useCallback(() => {

    dispatch(
      fetchStories({
        page: generalState.page,
        pageSize: generalState.pageSize,
        query: null,
      })
    );
  }, [dispatch, generalState]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Page className={"root"} title="Home">
      ssads
    </Page>
  );
};

export default HomeView;
