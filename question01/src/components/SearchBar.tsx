import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import Icons from "./Icons";

const SearchBar = () => {
  return (
    <div className="flex m-3">
      <select className=" bg-blue-400 h-1/3 w-1/3 rounded-l-lg p-2 ">
        <optgroup>
          <option>Limau</option>
          <option>Testing</option>
          <option>Testing</option>
        </optgroup>
      </select>
      <input
        type="search"
        placeholder="Search here"
        className=" bg-white w-1/2"
      ></input>
      <div className=" bg-amber-100 w-1/5 rounded-r-lg text-center pt-2">
      <SearchIcon/>
      </div>
    </div>
  );
};

export default SearchBar;
