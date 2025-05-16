import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { toast } from "react-hot-toast";
import axios from "axios";
import RegisteredEventList from "../components/ui/RegisteredEventList";

const Dashboard = () => {
  const [description, setDescription] = useState("");
  const { user } = useContext(AppContext);

  const registerEvent = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);

      const rawData = formData.get("date");
      const rawTime = formData.get("time");

      console.log(rawData, rawTime);

      const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(rawData));

      const [hours, minutes] = rawTime.split(":");

      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(new Date(0, 0, 0, hours, minutes));

      const payLoad = {
        title: formData.get("title"),
        description,
        date: formattedDate,
        time: formattedTime,
      };

      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/create-event",
        payLoad,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.data;

      if (data.success) {
        toast.success(data.message);
        e.target.reset();
        setDescription("");
      } else {
        toast.error(data.message);
      }
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
      <RegisteredEventList />
    </div>
  );
};

export default Dashboard;
