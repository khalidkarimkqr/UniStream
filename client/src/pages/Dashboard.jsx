import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Dashboard = () => {
  const [description, setDescription] = useState("");
  const { user } = useContext(AppContext);

  return (
    <div>
      {user?.role === "admin" && (
        <form className="w-full sm:w-[50vw] mx-auto px-5 grid gap-4 my-10">
          <Input type="text" placeholder="Title Here" id="title" />
          <textarea
            className="py-3 text-center rounded-lg w-full bg-gray-100 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-300 transition-all duration-300 ease-in-out text-gray-700 px-5"
            placeholder="Description Here"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
