import React, { FC, useCallback, useEffect, useState } from "react";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoadingSearchStory,
  generalStateStory,
  getSearchStories,
} from "../../store/stories/selectors";
import type {} from "redux-thunk/extend-redux";
import "./index.scss";
import PartialStory from "../../components/Story/PartialStory";
import { StoryOutputType } from "../../models/enums/story/story-output-type.enum";
import { Link } from "react-router-dom";
import { fetchSearchStories } from "../../services/stories/stories.service";
import SelectInput from "../../components/SelectInput";
import LoadingPage from "../../components/LoadingPage";
import {
  ClearSearchListSuccess,
  StorySetQuery,
} from "../../store/stories/actions";

const SearchResult: FC = () => {
  const dispatch = useDispatch();
  const generalState = useSelector(generalStateStory);

  const loadingSearch = useSelector(fetchLoadingSearchStory);
  const searchStories = useSelector(getSearchStories);

  const options = [
    { text: "Newest First", value: "newest" },
    { text: "Oldest First", value: "oldest" },
  ];
  const [selected, setSelected] = useState<{ text: string; value: string }>(
    options[0]
  );

  const getHomeData = useCallback(() => {
    if (generalState.query.length > 0) {
      dispatch(
        fetchSearchStories({
          useSearch: true,
          page: generalState.page,
          pageSize: generalState.pageSize,
          query: generalState.query,
          section: "news",
          orderBy: selected.value,
          showFields: "headline,trailText,thumbnail",
        })
      );
    } else {
      dispatch(ClearSearchListSuccess());
    }
  }, [dispatch, generalState, selected]);

  useEffect(() => {
    getHomeData();
  }, [selected, generalState]);

  useEffect(() => {
    return () => {
      dispatch(ClearSearchListSuccess());
    };
  }, []);

  return (
    <Page title="Search result">
      {loadingSearch ? (
        <LoadingPage />
      ) : (
        <div className="page-container">
          <section className="search-section">
            <div className="main-page-title-container">
              <div className="left-part">
                <h2 className="main-page-title">Search results</h2>
                <Link to={"/bookmarks"} className="bookmark-link">
                  <span>
                    {" "}
                    <img
                      alt="bookmark"
                      className="bookmark-icon"
                      src="/images/bookmarkon-icon@2x.svg"
                    />
                  </span>
                  View BOOKMARK
                </Link>
              </div>
              <div className="right-part">
                <SelectInput
                  selected={selected}
                  setSelected={setSelected}
                  options={options}
                />
              </div>
            </div>

            {searchStories.length > 0 ? (
              <div className="parent-story-container">
                {searchStories.map((story) => (
                  <PartialStory
                    story={story}
                    key={story.id}
                    storyOutputType={StoryOutputType.MainNoTriadText}
                  />
                ))}
              </div>
            ) : (
              <>
                {generalState.query.length > 0 ? (
                  <p className="no-result">
                    There is no result for your search
                  </p>
                ) : (
                  <p className="please-start-search">
                    Please type anything to start the searching
                  </p>
                )}
              </>
            )}
          </section>
        </div>
      )}
    </Page>
  );
};

export default SearchResult;
