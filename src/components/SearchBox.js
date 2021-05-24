import React from "react";

function SearchBox(props) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input 
        value={props.search}
        onChange={props.handleInputChange}
        name="employee"
        list="employees"
        className="form"
        type="text"
        placeholder="Search Here"
        />
              </form>
    </div>
  );
}
export default SearchBox;
