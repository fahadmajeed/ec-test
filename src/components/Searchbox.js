import React from "react";

function Searchbox() {
  return (
    <div>
      <form role="search" className="search-form">
        <input type="submit" value="" className="search-submit" />
        <input
          type="search"
          name="q"
          className="search-text"
          placeholder="Search..."
          autocomplete="off"
        />
      </form>
    </div>
  );
}

export default Searchbox;
