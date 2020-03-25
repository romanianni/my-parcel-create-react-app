import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
