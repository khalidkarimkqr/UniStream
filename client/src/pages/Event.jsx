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
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Event;
