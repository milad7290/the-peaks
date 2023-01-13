import React, { ChangeEvent, FC, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { generalStateStory } from "../../store/stories/selectors";
import { StorySetQuery } from "../../store/stories/actions";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = ({ ...rest }) => {
  const dispatch = useDispatch();
  const generalState = useSelector(generalStateStory);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(StorySetQuery(event.target.value));
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, []);

  useEffect(() => {
    if (generalState.query !== null && generalState.query === "") {
      inputRef.current.value = "";
    }
  }, [generalState]);

  const inputRef = useRef<any>(null);
  return (
    <header className="root-header">
      <div className="page-container">
        <div className="header-content">
          <Link to={"/"}>
            <img alt="logo" className="logo" src="/images/Logo_White.png" />
          </Link>

          <Link to={"/search-results"}>
            <div className="search-box">
              <input
                ref={inputRef}
                onChange={debouncedResults}
                placeholder="Search all news"
              ></input>
              <img
                alt="search"
                className="search-icon"
                src="/images/search-icon@2x.svg"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
