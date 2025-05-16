import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

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
      <p class="text-sm sm:text-md text-gray-500">
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-xs sm:text:sm text-slate-500 flex gap-2">
            On: {date} At: {time}
          </h3>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Event;
