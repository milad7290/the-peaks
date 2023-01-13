import React, { FC } from "react";
import "./index.scss";

const LoadingPage: FC = () => {
  return (
    <div className="page-container">
      <section className="loading-section">
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      </section>
    </div>
  );
};

export default LoadingPage;
