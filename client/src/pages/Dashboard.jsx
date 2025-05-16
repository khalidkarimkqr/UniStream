/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { toast } from "react-hot-toast";
import axios from "axios";

const Dashboard = () => {
  const [description, setDescription] = useState("");
  const { user } = useContext(AppContext);

  const registerEvent = async (e) => {
    e.preventDeault();
    try {
      const formData = new FormData(e);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      {user?.role === "admin" && (
        <form
          onSubmit={registerEvent}
          className="w-full sm:w-[50vw] mx-auto px-5 grid gap-4 my-10"
        >
          <Input type="text" placeholder="Title Here" id="title" />
          <textarea
            className="py-3 text-center rounded-lg w-full bg-gray-100 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-300 transition-all duration-300 ease-in-out text-gray-700 px-5"
            placeholder="Description Here"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <Input type="date" id="date" />
          <Input type="time" id="time" />
          <Button text="Create Event" />
        </form>
      )}
    </div>
  );
};

export default Dashboard;
