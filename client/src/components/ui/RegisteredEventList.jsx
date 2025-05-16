/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

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
      console.log(data);
      setEvents(data);
    };

    getRegisteredEvents();
  }, []);

  return <>{}</>;
};

export default RegisteredEventList;
