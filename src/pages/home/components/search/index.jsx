import React, { useState } from "react";
const Search = ({ onChange }) => {
  const [value, setValue] = useState("");
  function handleSearch() {
    onChange(value);
  }
  return (
    <div className="d-flex">
      <label>
        Search
        <input
          onChange={e => setValue(e.target.value)}
          data-testid="search-input"
        />
        <button
          className="btn btn-primary"
          onClick={handleSearch}
          data-testid="search-btn"
        >
          Search!
        </button>
      </label>
    </div>
  );
};

export { Search };
