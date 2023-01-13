import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  detailErrorStory,
  detailLoadingStory,
  selectedStory,
} from "../../store/stories/selectors";
import type {} from "redux-thunk/extend-redux";
import "./index.scss";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchStory } from "../../services/stories/stories.service";
import LoadingPage from "../../components/LoadingPage";
import {
  addToBookmark,
  checkForBookmark,
  removeBookmark,
} from "../../providers/bookmark.provider";
import { useToast } from "../../hooks/useToast";
import { ToastType } from "../../models/enums/story/toast-type.enum";

const StoryDetails: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const article = useSelector(selectedStory);
  const loading = useSelector(detailLoadingStory);
  const error = useSelector(detailErrorStory);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const articleId = searchParams.get("id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const getData = useCallback(() => {
    if (articleId) {
      dispatch(fetchStory(articleId));
      const isBookmarked = checkForBookmark(articleId);
      setIsBookmarked(isBookmarked);
    }
  }, [dispatch, articleId]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (error && (error.statusCode === 404 || error.statusCode === "unknown")) {
      navigate("/404");
    }
  }, [error]);

  const myRef = useRef<any>(null);

  useEffect(() => {
    if (article) {
      myRef.current.innerHTML = article.fields.body;
    }
  }, [article, myRef]);

  const addToBookMarkHandle = () => {
    if (articleId) {
      addToBookmark(articleId);
      const isBookmarked = checkForBookmark(articleId);
      setIsBookmarked(isBookmarked);
      addToast({
        content: "Saved to bookmark",
        type: ToastType.Success,
        icon: "/images/bookmarkon-icon@2x.svg",
      });
    }
  };

  const removeFromBookMarkHandle = () => {
    if (articleId) {
      removeBookmark(articleId);
      const isBookmarked = checkForBookmark(articleId);
      setIsBookmarked(isBookmarked);
      addToast({
        content: "Removed from bookmark",
        type: ToastType.Error,
        icon: "/images/bookmarkoff-icon@2x.svg",
      });
    }
  };

  return (
    <Page title="Story details">
      <div className="page-container">
        {loading ? (
          <LoadingPage />
        ) : (
          <div className="details-section">
            <div className="top-info">
              <button
                onClick={() => {
                  isBookmarked
                    ? removeFromBookMarkHandle()
                    : addToBookMarkHandle();
                }}
                className="bookmark-button"
              >
                <span>
                  {" "}
                  <img
                    alt="bookmark"
                    className="bookmark-icon"
                    src="/images/bookmarkon-icon@2x.svg"
                  />
                </span>
                {isBookmarked ? "Remove" : "Add"} BOOKMARK
              </button>

              <span className="article-publish-date">
                {moment(article?.webPublicationDate).format(
                  "ddd DD MMM YYYY hh.mm"
                )}{" "}
                BST
              </span>
              <h1>{article?.fields.headline}</h1>
              <h3>{article?.fields.trailText}</h3>

              <hr />
            </div>
            <div className="bottom-info">
              <div ref={myRef} className="article-body"></div>
              <div className="article-image">
                {article && article.fields && article.fields.thumbnail ? (
                  <img
                    alt={article.webTitle}
                    className="back-image"
                    src={article.fields.thumbnail}
                  />
                ) : (
                  <div className="no-article-image">
                    <img
                      alt="logo"
                      className="logo"
                      src="/images/Logo_White.png"
                    />
                  </div>
                )}
                <p>{article?.webTitle}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default StoryDetails;
