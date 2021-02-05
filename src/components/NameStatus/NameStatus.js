import React,{Fragment, useState} from "react";
import "./NameStatus.scss";

const NameStatus = () => {
  const [scenarioName, setScenarioName] = useState("");

  const handleChange =(e)=>{
    setScenarioName(e.target.value);
  };

  return (
    <Fragment>
      <div className="scenario-wrapper">
        <div>
          <h4>Scenario name</h4>
          <input type="text" placeholder="Type scenario name here" value={scenarioName} onChange={handleChange}/> 
        </div>   
        <div>
          <h4>Scenario status</h4>
          <select name="status" id="status">
            <option value="Select status">--Select status--</option>
            <option value="draft">Draft</option>
            <option value="testing">Testing</option>
            <option value="live">Live</option>
          </select> 
        </div>
      </div>
    </Fragment>
   
  );
};

export default NameStatus;
