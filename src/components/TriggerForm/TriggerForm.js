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
      <form>
        <div>
        Trigger Name <input type="text"  name="name" value={inputs.name} onChange={handleTriggerChange}/>
        </div> 
        <div>
        Category<input type="text"  name="category" value={inputs.category}/>
        </div>  
        <div>
        Text Pattern<input type="text"  name="pattern" value={inputs.category}/>
        </div>  
        <div>
        Channel
          <select name="channel" id="channel">
            <option value="Select channel">--Select channel--</option>
            <option value="channel1">Channel 1</option>
            <option value="channel2">Channel 2</option>
            <option value="channel3">Channel 3</option>
          </select> 
        </div>  
        <div className="save-trash">
          <input type="submit" value="Save"/>
          <FaTrash/>
        </div>
        
      </form>

      
    </Fragment>
  );
};

export default TriggerForm;
