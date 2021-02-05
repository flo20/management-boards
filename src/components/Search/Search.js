import React, { Fragment,useState } from "react";
import "./Search.scss";

//data for to be searched
const data = [
  "Scenario Name   1",
  "Scenario Name   2",
  "Scenario Name   3",
  "Scenario Name   4",
  "Scenario Name   5",
  "Scenario Name   6",
  "Scenario Name   7",
  "Scenario Name   8",
  "Scenario Name   9", 
  "Scenario Name   10" 
];

const Search = () => {
  //state for searchValue
  const [searchValue, setSearchValue] = useState("");

  //update the search value
  const handleSearchChange = (e)=> {
    setSearchValue(e.target.value);
  };

  //filter results

  const results = !searchValue ? data : data.filter((dat)=> dat.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  return (
    <Fragment>
      <div>
        <input type="text" placeholder="Search Scenario Name" value={searchValue} onChange={handleSearchChange}/>
        <ul className="data-list">
          {
            results.map((item)=>{
              return(
                <li key={item}>
                  {item}
                </li>      
              );
            }) 
          }
                   
        </ul>
      </div>
    </Fragment>
  );
};

export default Search;
