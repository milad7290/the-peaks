import PropTypes from "prop-types";
import React, { FC } from "react";
import "./index.scss";

interface TopBarProps {
  className?: string;
}

const TopBar: FC<TopBarProps> = ({ className, ...rest }) => {
  return (
    <header className="root-header">
      <div className="page-container">
        <div className="header-content">
          <img alt="logo" className="logo" src="/images/Logo_White.png" />

          <div className="search-box">
            <input placeholder="Search all news"></input>
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

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
