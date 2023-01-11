import PropTypes from "prop-types";
import React, { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import "./index.scss";

interface TopBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TopBar: FC<TopBarProps> = ({ query, setQuery, ...rest }) => {
  const [value, setValue] = useState(query);

  const debouncedFn = debounce(async (query: string) => {
    await setQuery(query);
  }, 500);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setValue(event.target.value);

    debouncedFn(event.target.value);
  };

  return (
    <header className="root-header">
      <div className="page-container">
        <div className="header-content">
          <Link to={"/"} className="bookmark-link">
            <img alt="logo" className="logo" src="/images/Logo_White.png" />
          </Link>

          <div className="search-box">
            <input
              onChange={handleQueryChange}
              value={value}
              placeholder="Search all news"
            ></input>
            <img
              alt="search"
              className="search-icon"
              src="/images/search-icon@2x.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
