import React, { Fragment } from "react";
import Search from "./components/Search/Search";
import "./App.scss";
import ScenarioDetails from "./components/ScenarioDetails/ScenarioDetails";
import OverallStats from "./components/OverallStats/OverallStats";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <Fragment>
      <Nav/>
      <div className="page-container">
        <Search/>
        <ScenarioDetails/>
        <OverallStats/>  
      </div>
    </Fragment>
   
  );
};

export default App;
