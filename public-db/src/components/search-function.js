import React from "react";
import "../App.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search sticky-top">
      <div className="form-group">
        <label htmlFor="employees">search:</label>
        <input
            onChange={props.handleInputChange}
            value={props.value}
            id="employees"
            type="text"
            name="search"
            list="employee"
            className="inputBox"
            placeholder="first name"
        />
        <button type="submit" onClick={props.handleSearch} className="btn btn-custom">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
