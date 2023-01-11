import PropTypes from "prop-types";
import { FC, ReactNode, useState } from "react";
import React from "react";
import TopBar from "../../components/TopBar";
import "./index.scss";
import SearchResult from "../../views/SearchResult";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className={"root-layout"}>
      <TopBar query={query} setQuery={setQuery} />

      {query.length > 0 ? (
        <SearchResult />
      ) : (
        <div className={"content"}>{children}</div>
      )}

      <footer className="footer"></footer>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
