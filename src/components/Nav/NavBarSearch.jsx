import React, { useState } from "react";
import "./NavBarSearch.css";

export default function NavBarSearch() {
  const [searchWith, setSearchWith] = useState(30);
  const [toggle, setToggle] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleExpand = () => {
    if (searchValue === "") {
      setToggle(!toggle);
      toggle ? setSearchWith(160) : setSearchWith(30);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="nav-search"
        name='q'
        style={{ width: searchWith }}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.currentTarget.value);
        }}
      ></input>
      <i
        onClick={() => handleExpand()}
        className="fa fa-search search-icon"
      ></i>
    </div>
  );
}
