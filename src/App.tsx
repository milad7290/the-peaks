import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import routes, { renderRoutes } from "./routes";
import store from "../src/store";
import { ToastProvider } from "./components/Toast/ToastProvide";

function App() {
  return (
    <div className="root">
      <Provider store={store()}>
        <ToastProvider>
          <Router>{renderRoutes(routes)}</Router>
        </ToastProvider>
      </Provider>
    </div>
  );
}

export default App;
