import React, { FC, useCallback, useEffect } from "react";
import Page from "../../../components/Page";
import { fetchStories } from "../../../services/stories/stories.service";
import { useDispatch, useSelector } from "react-redux";
import { generalStateStory } from "../../../store/stories/selectors";
import type {} from "redux-thunk/extend-redux";
import "./index.scss";
import HeadLineStory from "../../../components/Story/HeadLineStory";

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
    <Page title="Home">
      <div className="page-container">
        <section className="primary-section">
          <div className="main-page-title-container">
            <div className="left-part">
              <h2 className="main-page-title">Top stories</h2>
              <a className="bookmark-link">
                <span>
                  {" "}
                  <img
                    alt="bookmark"
                    className="bookmark-icon"
                    src="/images/bookmarkon-icon@2x.svg"
                  />
                </span>
                View BOOKMARK
              </a>
            </div>
            <div className="right-part">
              <select value={"A"}>
                <option value="A">Apple</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
              </select>
            </div>
          </div>

          <div className="top-story-container">
            <div className="head-line-story">
              <HeadLineStory
                story={{
                  id: "culture/2023/jan/09/alan-sugar-the-apprentice-candidate-milliionaires",
                  type: "article",
                  sectionId: "culture",
                  sectionName: "Culture",
                  webPublicationDate: "2023-01-09T15:38:26Z",
                  webTitle:
                    "Alan Sugar on making The Apprentice: ‘If I was a candidate, I’d win every time’",
                  webUrl:
                    "https://www.theguardian.com/culture/2023/jan/09/alan-sugar-the-apprentice-candidate-milliionaires",
                  apiUrl:
                    "https://content.guardianapis.com/culture/2023/jan/09/alan-sugar-the-apprentice-candidate-milliionaires",
                  isHosted: false,
                  pillarId: "pillar/arts",
                  pillarName: "Arts",
                  fields: {
                    thumbnail:
                      "https://media.guim.co.uk/3e7209b761bf272aa619d40d4cbbca42352e1247/66_102_3990_2394/500.jpg",
                  },
                }}
              />
            </div>
            <div
              style={{ width: "100%", height: 252, background: "red" }}
            ></div>
            <div
              style={{ width: "100%", height: 252, background: "red" }}
            ></div>
            <div
              style={{ width: "100%", height: 138, background: "red" }}
            ></div>
            <div
              style={{ width: "100%", height: 138, background: "red" }}
            ></div>
          </div>

          <div className="bottom-story-container">
            <div
              style={{ width: "100%", height: 347, background: "red" }}
            ></div>
            <div
              style={{ width: "100%", height: 347, background: "red" }}
            ></div>
            <div
              style={{ width: "100%", height: 347, background: "red" }}
            ></div>
          </div>
        </section>

        <section className="secondary-section">
          <h2 className="secondary-title">Sports</h2>
          <div className="secondary-story-container">
            <div
              style={{ width: "100%", height: 347, background: "red" }}
            ></div>
            <div
              style={{ width: "100%", height: 347, background: "red" }}
            ></div>
            <div
              style={{ width: "100%", height: 347, background: "red" }}
            ></div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default HomeView;
