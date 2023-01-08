import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import routes, { renderRoutes } from "./routes";
import store from "../src/store";

function App() {
  return (
    <div className="root">
      <Provider store={store()}>
        <Router>{renderRoutes(routes)}</Router>
      </Provider>
    </div>
  );
}

export default App;
