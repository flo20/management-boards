import React, { Fragment } from "react";
import "./OverallStats.scss";
//import placeholder from "./../assets/placeholder.svg";

const OverallStats = () => {
  return (
    <Fragment>
      <div>
        <div className="overall-card">
          <h3>OVERALL SCENARIO STATS</h3>
          <div className="plachold-box">
            {/* <div className="placeholders">
              <img src={placeholder} style={{width:"100px"}}/>
              <h5 style={{color:"#063C58"}}>No results!</h5>
            </div> */}
          </div>
        </div>
       
        <h5 style={{textAlign:"center", color:"#063C58"}}>No Stats</h5>
      </div>
    </Fragment>
    
  );
};

export default OverallStats;
