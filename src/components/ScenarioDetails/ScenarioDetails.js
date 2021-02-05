import React, { Fragment } from "react";
import NameStatus from "../NameStatus/NameStatus";
import Triggers from "../Triggers/Triggers";
import "./ScenarioDetails.scss";

const ScenarioDetails = () => {
  return (
    <Fragment>
      <div className="details-card">
        <h1>Scenario Details</h1> 
        <NameStatus/>
        <Triggers/>
      </div>
     

    </Fragment>
  );
};

export default ScenarioDetails;
