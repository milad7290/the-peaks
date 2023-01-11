import PropTypes from "prop-types";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import React from "react";
import TopBar from "../../components/TopBar";
import "./index.scss";
interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {



  return (
    <div className={"root-layout"}>
      <TopBar  />

      <div className={"content"}>{children}</div>

      <footer className="footer"></footer>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
