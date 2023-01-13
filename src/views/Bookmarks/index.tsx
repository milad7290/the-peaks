import React, { FC, useEffect, useState } from "react";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoadingSearchStory,
  getSearchStories,
} from "../../store/stories/selectors";
import type {} from "redux-thunk/extend-redux";
import "./index.scss";
import PartialStory from "../../components/Story/PartialStory";
import { StoryOutputType } from "../../models/enums/story/story-output-type.enum";
import { getBookmarks } from "../../providers/bookmark.provider";
import { fetchSearchStories } from "../../services/stories/stories.service";
import SelectInput from "../../components/SelectInput";
import { ClearSearchListSuccess } from "../../store/stories/actions";
import LoadingPage from "../../components/LoadingPage";
import { ErrorBoundary } from "../Errors/ErrorBoundary";

const Bookmarks: FC = () => {
  const dispatch = useDispatch();
  const loadingBookmarks = useSelector(fetchLoadingSearchStory);
  const bookmarks = useSelector(getSearchStories);

  const options = [
    { text: "Newest First", value: "newest" },
    { text: "Oldest First", value: "oldest" },
  ];
  const [selected, setSelected] = useState<{ text: string; value: string }>(
    options[0]
  );

  useEffect(() => {
    const bookmarks = getBookmarks();
    if (bookmarks.length > 0) {
      const bookmarkIds = bookmarks.join(",");
      dispatch(
        fetchSearchStories({
          useSearch: true,
          orderBy: selected.value,
          showFields: "headline,trailText,thumbnail",
          ids: bookmarkIds,
        })
      );
    }
  }, [selected]);

  useEffect(() => {
    return () => {
      dispatch(ClearSearchListSuccess());
    };
  }, []);
  return (
    <Page title="Bookmarks">
      {loadingBookmarks ? (
        <LoadingPage />
      ) : (
        <div className="page-container">
          <section className="bookmark-section">
            <div className="main-page-title-container">
              <div className="left-part">
                <h2 className="main-page-title">All bookmark</h2>
              </div>
              <div className="right-part">
                <ErrorBoundary>
                  <SelectInput
                    selected={selected}
                    setSelected={setSelected}
                    options={options}
                  />
                </ErrorBoundary>
              </div>
            </div>

            {bookmarks.length > 0 ? (
              <div className="parent-story-container">
                {bookmarks.map((story) => (
                  <ErrorBoundary key={story.id}>
                    <PartialStory
                      story={story}
                      storyOutputType={StoryOutputType.MainNoTriadText}
                    />
                  </ErrorBoundary>
                ))}
              </div>
            ) : (
              <p className="no-result">There is no result as your bookmarks</p>
            )}
          </section>
        </div>
      )}
    </Page>
  );
};

export default Bookmarks;
