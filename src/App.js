import React from "react";
import Search from "./components/Search/Search";
import "./App.scss";
import ScenarioDetails from "./components/ScenarioDetails/ScenarioDetails";

const App = () => {
  return (
    <div className="page-container">
      <Search/>
      <ScenarioDetails/>
    </div>
  );
};

export default App;
