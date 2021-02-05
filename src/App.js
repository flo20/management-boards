import React from "react";
import Search from "./components/Search/Search";
import "./App.scss";
import ScenarioDetails from "./components/ScenarioDetails/ScenarioDetails";
import OverallStats from "./components/OverallStats/OverallStats";

const App = () => {
  return (
    <div className="page-container">
      <Search/>
      <ScenarioDetails/>
      <OverallStats/>
    </div>
  );
};

export default App;
