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
    <div className="p-3 rounded-lg bg-gray-50 shadow-md flex flex-col gap-1 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
      <Link
        to={`/event/${_id}`}
        className="text-md sm:text-lg font-semibold text-gray-700 hover:underline"
        title="View Event Details"
      >
        {title}
      </Link>
    </div>
  );
};

export default Event;
