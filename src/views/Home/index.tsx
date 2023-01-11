import React, { FC, useCallback, useEffect, useState } from "react";
import Page from "../../components/Page";
import {
  fetchCatBaseStories,
  fetchTopStories,
} from "../../services/stories/stories.service";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoadingCatBaseStory,
  fetchLoadingTopStory,
  generalStateStory,
  getCatBaseHomeStories,
  getTopHomeStories,
} from "../../store/stories/selectors";
import type {} from "redux-thunk/extend-redux";
import "./index.scss";
import PartialStory from "../../components/Story/PartialStory";
import { StoryOutputType } from "../../models/enums/story/story-output-type.enum";
import { Link } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import SelectInput from "../../components/SelectInput";

const Home: FC = () => {
  const dispatch = useDispatch();
  const generalState = useSelector(generalStateStory);

  const loadingTop = useSelector(fetchLoadingTopStory);
  const loadingCatBase = useSelector(fetchLoadingCatBaseStory);

  const topHomeStories = useSelector(getTopHomeStories);
  const catBaseHomeStories = useSelector(getCatBaseHomeStories);

  const options = [
    { text: "Newest First", value: "newest" },
    { text: "Oldest First", value: "oldest" },
  ];
  const [selected, setSelected] = useState<{ text: string; value: string }>(
    options[0]
  );

  const getHomeData = useCallback(() => {
    dispatch(
      fetchTopStories({
        useSearch: true,
        page: 1,
        pageSize: 8,
        query: null,
        section: "news",
        orderBy: selected.value,
        showFields: "headline,trailText,thumbnail",
      })
    );
    dispatch(
      fetchCatBaseStories({
        useSearch: true,
        page: 1,
        pageSize: 3,
        query: null,
        orderBy: selected.value,
        section: "sport|culture|lifeandstyle",
        showFields: "headline,trailText,thumbnail",
      })
    );
  }, [dispatch, generalState, selected]);

  useEffect(() => {
    getHomeData();
  }, [selected]);

  return (
    <Page title="Home">
      {loadingTop || loadingCatBase ? (
        <LoadingPage />
      ) : (
        <div className="page-container">
          <section className="primary-section">
            <div className="main-page-title-container">
              <div className="left-part">
                <h2 className="main-page-title">Top stories</h2>
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

            {topHomeStories.length > 0 && (
              <>
                <div className="top-story-container">
                  <div className="head-line-story">
                    <PartialStory
                      story={topHomeStories[0]}
                      storyOutputType={StoryOutputType.HeadLine}
                    />
                  </div>
                  {topHomeStories.slice(1, 5).map((story, index) => (
                    <PartialStory
                      key={story.id}
                      story={story}
                      storyOutputType={
                        index < 2
                          ? StoryOutputType.HomeTop
                          : StoryOutputType.HomeTopImageLess
                      }
                    />
                  ))}
                </div>
                <div className="bottom-story-container">
                  {topHomeStories.slice(5, 8).map((story) => (
                    <PartialStory key={story.id} story={story} />
                  ))}
                </div>
              </>
            )}
          </section>

          {catBaseHomeStories.length > 0 && (
            <section className="secondary-section">
              <h2 className="secondary-title">Sports</h2>
              <div className="secondary-story-container">
                {catBaseHomeStories.map((story) => (
                  <PartialStory
                    key={story.id}
                    story={story}
                    storyOutputType={StoryOutputType.MainNoTriadText}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </Page>
  );
};

export default Home;
