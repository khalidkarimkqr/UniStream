/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Event from "../components/Event";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

const Home = () => {
  const { events, setEvents } = useContext(AppContext);

  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/get-events`);
      const { data } = await res.data;
      setEvents(data);
    };
    getEvents();
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="w-full lg:w-[50vw] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
        {events?.map((event) => {
          return (
            <Event
              key={event?._id}
              {...event}
              onClick={() => registerEvent(event._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
