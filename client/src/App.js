import React from "react";
import "./App.css";

import Header from "./components/header";
import Box from "./components/box";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <div className="list-area">
          <Box />
        </div>
      </div>
    </div>
  );
};

export default App;
