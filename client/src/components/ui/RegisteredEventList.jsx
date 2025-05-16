import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const RegisteredEventList = () => {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { user } = React.useContext(AppContext);
  const navigate = useNavigate();

  return <div>RegisteredEventList</div>;
};

export default RegisteredEventList;
