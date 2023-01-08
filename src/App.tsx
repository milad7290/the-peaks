import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.scss";
import routes, { renderRoutes } from "./routes";

function App() {
  return (
    <div className="root">
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
