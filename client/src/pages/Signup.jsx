import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { toast } from "react-hot-toast";

const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // signup logic goes here
    } catch (error) {
      // handle errors
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="sm:w-[50vw] mx-auto px-5 h-[80vh] flex flex-col justify-center gap-4"
      >
        <div className="flex gap-4">
          <Input id="firstName" type="text" placeholder="First Name Here" />
          <Input id="lastName" type="text" placeholder="Last Name Here" />
        </div>
        <Input id="email" type="email" placeholder="Email Here" />
        <div className="flex flex-col sm:flex-row gap-4">
          <Input id="password" type="password" placeholder="Password Here" />
          <Button text="Create Account" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
