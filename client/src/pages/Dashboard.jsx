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
          <Input />
        </form>
      )}
    </div>
  );
};

export default Dashboard;
