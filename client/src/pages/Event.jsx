/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const { user } = useContext(AppContext);

  useEffect(() => {
    const getEventById = async () => {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/get-event-by-id/${eventId}`
      );
      const data = await res.data;

      if (data.success) {
        setEvent(data.data);
      } else {
        toast.error(data.message);
      }
    };
    getEventById();
  }, []);

  return (
    <div className="w-full sm:w-[50vw] mx-auto px-5 my-10">
      {event && (
        <div>
          <div className="p-4 bg-gray-100 rounded-lg grid gap-1">
            <h1 className="text-2xl font-semibold text-gray-700">
              {event.title}
            </h1>
            <p className="text-gray-500 bg-white p-3 rounded-2xl my-2">
              {event.description}
            </p>
            <p className="text-yellow-500 font-semibold">Date: {event.date}</p>
            <p className="text-yellow-500 font-semibold">Time: {event.time}</p>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Event;
