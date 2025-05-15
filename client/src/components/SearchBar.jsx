import React, { useState } from "react";
import Input from "./ui/Input";

const SearchBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="w-full sm:w-[50vw] mx-auto px-5 flex justify-evenly mb-3">
      <Input
        placeholder="Search for events, clubs or people"
        id="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
