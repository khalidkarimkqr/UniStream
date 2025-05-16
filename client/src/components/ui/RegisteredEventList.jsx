import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Event from "../Event";
import toast from "react-hot-toast";

const RegisteredEventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getRegisteredEvents = async () => {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/get-registered-events",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { data } = await res.data;
      setEvents(data);
    };

    getRegisteredEvents();
  }, []);

  const startEvent = async (eventId, eventstatus) => {
    setLoading(true);
    if (user.role !== "admin") {
      if (eventstatus === "started") {
        setLoading(false);
        navigate(`/room/${eventId}`);
        return;
      } else {
        if (eventstatus === "not started") {
          const res = await axios.put(
            import.meta.env.VITE_API_URL + `/start-event/${eventId}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const { data } = await res.data;
          if (data.success) {
            setLoading(false);
            navigate(`/room/${eventId}`);
            toast.success(data.message);
          } else {
            setLoading(false);
            toast.error(data.message);
          }
        }
      }

      if (eventstatus === "ended") {
        setLoading(false);
        toast.error("Event has already ended");
        return;
      }
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="w-screen justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin text-3xl mx-auto" />
        </div>
      ) : (
        <div>
          {events?.length === 0 && (
            <div className="w-full sm:w-[50vw] mx-auto px-5 h-[80vh] flex flex-col justify-center items-center">
              <h1 className="text-2xl text-gray-600">
                No Events Registered Yet
              </h1>
            </div>
          )}
          <div className="w-full sm:w-[50vw] mx-auto px-5 grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            {events.map((event) => (
              <Event
                key={event?._id}
                {...event}
                onClick={() => startEvent(event._id, event.status)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RegisteredEventList;
