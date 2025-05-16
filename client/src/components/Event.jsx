import React from "react";
import { Link } from "react-router-dom";

const Event = ({
  _id,
  title = "Event Title",
  description = "dfjaodj02 23790263 bdfnydfaynd dfadf 2e 2er ",
  date = "2023-10-01",
  time = "12:00",
  registeredUsers = 0,
  status = "upcoming",
  onClick,
}) => {
  return (
    <div>
      <Link to={`/event/${_id}`}>{title}</Link>
    </div>
  );
};

export default Event;
