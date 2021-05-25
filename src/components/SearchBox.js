import React from "react";

function SearchBox(props) { console.log("here ", props)
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input 
         onChange={props.handleSearch}
         value={props.search}
         name="search"
         type="text"
         className="form-control"
         placeholder="Search by Last Name"
         id="search"
        />
              </form>
    </div>
  );
}
export default SearchBox;
