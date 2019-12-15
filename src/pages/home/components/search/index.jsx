import React, { useState } from "react";
import "./styles.scss";
const Search = ({ onChange }) => {
  const [value, setValue] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    onChange(value);
  }

  return (
    <div className="search-container mb-4 mt-4">
      <form onSubmit={handleSearch} className="d-flex w-100">
        <div className="input-group">
          <input
            className="form-control"
            onChange={e => setValue(e.target.value)}
            data-testid="search-input"
            id="search-input"
            placeholder="Search..."
            aria-label="Search movie"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="submit"
              data-testid="search-btn"
            >
              Search!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Search };
