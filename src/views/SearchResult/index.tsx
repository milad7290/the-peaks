import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoadingSearchStory,
  fetchLoadingSearchStoryConcat,
  generalStateStory,
  getSearchStories,
  responsePagesCountSearchStories,
  totalSearchStories,
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
  StorySetPage,
} from "../../store/stories/actions";
import InfiniteScroll from "react-infinite-scroll-component";
import usePrevious from "../../hooks/usePrevious";

const SearchResult: FC = () => {
  const dispatch = useDispatch();
  const generalState = useSelector(generalStateStory);

  const loadingSearch = useSelector(fetchLoadingSearchStory);
  const loadingSearchConcat = useSelector(fetchLoadingSearchStoryConcat);

  const responsePagesCountSearch = useSelector(responsePagesCountSearchStories);

  const searchStories = useSelector(getSearchStories);

  const fetchData = () => {
    if (responsePagesCountSearch > generalState.page) {
      dispatch(StorySetPage(generalState.page + 1));
    }
  };

  const options = [
    { text: "Newest First", value: "newest" },
    { text: "Oldest First", value: "oldest" },
  ];
  const [selected, setSelected] = useState<{ text: string; value: string }>(
    options[0]
  );

  const prevSelected = usePrevious({ selected }) as any;

  const getHomeData = useCallback(() => {
    if (generalState.query.length > 0) {
      if (
        prevSelected &&
        prevSelected.selected.value !== selected.value &&
        generalState.page > 1
      ) {
        dispatch(StorySetPage(1));
      } else {
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
      }
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
            <InfiniteScroll
              dataLength={searchStories.length}
              next={fetchData}
              hasMore={true}
              loader={
                loadingSearchConcat && <h4 className="load-more">loading...</h4>
              }
              endMessage={
                <p className="end-message">
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
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
            </InfiniteScroll>
          </section>
        </div>
      )}
    </Page>
  );
};

export default SearchResult;
