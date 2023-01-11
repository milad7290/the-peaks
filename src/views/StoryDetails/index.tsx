import React, { FC, useCallback, useEffect, useRef } from "react";
import Page from "../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import {
  detailLoadingStory,
  selectedStory,
} from "../../store/stories/selectors";
import type {} from "redux-thunk/extend-redux";
import "./index.scss";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { fetchStory } from "../../services/stories/stories.service";
import LoadingPage from "../../components/LoadingPage";

const StoryDetails: FC = () => {
  const dispatch = useDispatch();
  const article = useSelector(selectedStory);
  const loading = useSelector(detailLoadingStory);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const articleId = searchParams.get("id");

  const getData = useCallback(() => {
    dispatch(fetchStory(articleId));
  }, [dispatch, articleId]);

  useEffect(() => {
    getData();
  }, []);

  const myRef = useRef<any>(null);

  useEffect(() => {
    if (article) {
      myRef.current.innerHTML = article.fields.body;
    }
  }, [article, myRef]);

  return (
    <Page title="Story details">
      <div className="page-container">
        {loading ? (
          <LoadingPage />
        ) : (
          <div className="details-section">
            <div className="top-info">
              <button className="bookmark-button">
                <span>
                  {" "}
                  <img
                    alt="bookmark"
                    className="bookmark-icon"
                    src="/images/bookmarkon-icon@2x.svg"
                  />
                </span>
                Add BOOKMARK
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
                <p>
                 {article?.webTitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default StoryDetails;
