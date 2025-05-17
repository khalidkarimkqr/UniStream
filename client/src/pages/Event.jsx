/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";
import toast from "react-hot-toast";
import { FiUsers } from "react-icons/fi";

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
            <div className="flex justify-between items-center">
              <p className="text-gray-600 capitalize">Status: {event.status}</p>
              <p className="text-gray-600 flex gap-2 items-center bg-white rounded-lg px-3 py-1">
                <FiUsers />
                <span>
                  {event?.registeredUsers?.length <= 0
                    ? "0"
                    : event?.registeredUsers?.length}
                </span>
              </p>
            </div>
          </div>
          <h1 className="my-5 text-lg font-semibold ml-2">Registered Users</h1>
          <div className="flex gap-4">
            {event && event?.registeredUsers?.length > 0 ? (
              event?.registeredUsers?.map((u) => (
                <div
                  key={u._id}
                  className={`${
                    u._id === user._id ? "bg-yellow-500" : "bg-gray-100"
                  } py-2 px-4 rounded-full flex gap-2 items-center w-full`}
                >
                  <div
                    className={`w-5 h-5 rounded-full ${
                      u._id === user._id ? "bg-white" : "bg-yellow-500"
                    }`}
                  ></div>
                  <span>
                    {u.firstName} {u.lastName}
                  </span>
                </div>
              ))
            ) : (
              <p>No users registered</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
