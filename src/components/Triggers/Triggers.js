import React from "react";
import TriggerForm from "../TriggerForm/TriggerForm";
import "./Triggers.scss";
import {IoAddCircleOutline} from "react-icons/io5";

const Triggers = () => {
  return (
    <div>
      <p className="sub-head">Use draft mode while creating scenarios.Draft scenario triggers will not be processessd.</p>
      <div  className="detail-card2">
        <h3>TRIGGERS</h3>
        <ul className="trigger-names">
          <li>TEXT</li>
          <li>CALL DURATION</li>
          <li>FEEDBACK COLLECTION</li>
        </ul>
        <p className="select-trigger">Select text triggers to send messages  after a  keyword or keywords are stated. </p>
        <TriggerForm/>
      </div>

      <button className="add-trigger">
        <span><IoAddCircleOutline/> Add Trigger</span>
      </button>
    </div>
  );
};

export default Triggers;
