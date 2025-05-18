/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Input from "./ui/Input";
import axios from "axios";
import { AppContext } from "../contexts/AppContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { setEvents } = useContext(AppContext);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm.trim() === "") {
        // If input is cleared, refetch all events
        axios
          .get(`${import.meta.env.VITE_API_URL}/get-registered-events`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => setEvents(res.data.data))
          .catch((err) => console.log(err));
      } else {
        // If input has value, search
        axios
          .get(
            `${import.meta.env.VITE_API_URL}/search-event?search=${searchTerm}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => setEvents(res.data.data))
          .catch((err) => console.log(err));
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

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
