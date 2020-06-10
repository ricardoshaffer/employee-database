import React from "react";
import "../App.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employees">Employee Data:</label>
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
        <button type="submit" onClick={props.handleSearch} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
