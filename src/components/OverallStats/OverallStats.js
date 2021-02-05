import React, { Fragment } from "react";
import "./OverallStats.scss";
import placeholder from "./../assets/placeholder.svg";

const OverallStats = () => {
  return (
    <Fragment>
      <div>
        <button>BACK TO SCENARIO OVERVIEW</button>
        <h3>OVERALL SCENARIO STATS</h3>
        <div>
          <img src={placeholder} className="placeholders"/>
          <h5>No results!</h5>
        </div>
        <h5>No Stats</h5>
      </div>
    </Fragment>
    
  );
};

export default OverallStats;
