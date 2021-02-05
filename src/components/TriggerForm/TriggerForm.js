import React, { Fragment,useState } from "react";
import "./TriggerForm.scss";

import {FaTrash} from "react-icons/fa";

const TriggerForm = () => {
  const [inputs, setInputs] = useState({
    name:"",
    category:"",
    patterns:""
  });

  const handleTriggerChange =(e)=>{
    setInputs(e.target.value);
  };

  return (
    <Fragment>
      <form className="fields">
        <div>
          <label>Trigger Name</label>   
          <div>
            <input type="text"  
              name="name" value={inputs.name} 
              onChange={handleTriggerChange} 
              className="input-box"
              placeholder="Type trigger name here,e.g Password reset authentication"
            />
          </div>  
        </div> 
        <div>
          <label>Category</label> 
          <div>
            <input type="text"  
              name="category" 
              value={inputs.category} 
              onChange={handleTriggerChange} 
              className="input-box"
              placeholder="Type category of trigger"
            />
          </div>
        </div>  
        <div>
          <label>Text Pattern</label>
          <div>
            <input type="text" 
              name="pattern" 
              value={inputs.category} 
              onChange={handleTriggerChange} 
              className="input-box"
              placeholder="Text pattern"
            />

          </div>
         
        </div> 

        <div>
          <label>Channel</label>
          <div>
            <select name="channel" id="channel">
              <option value="Select channel">--Select channel--</option>
              <option value="channel1">Channel 1</option>
              <option value="channel2">Channel 2</option>
              <option value="channel3">Channel 3</option>
            </select> 
          </div>
         
        </div> 
         
        <div className="save-trash">
          <input type="submit" value="SAVE" className="save-btn"/>
          <FaTrash/>
        </div>
        
      </form>

      
    </Fragment>
  );
};

export default TriggerForm;
