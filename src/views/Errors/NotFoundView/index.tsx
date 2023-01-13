import type { FC } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Page from "../../../components/Page";
import "./index.scss";

const NotFoundView: FC = () => {
  return (
    <Page title="404: Not found">
      <div className="not-found-container">
      <img
        alt="select"
        className="select-icon"
        src="/images/not-found.webp"
      />
       <Link to={"/"} >
          <button className="back-to-home" >
            Back to home
          </button>
        </Link>
      </div>
    </Page>
  );
};

export default NotFoundView;
