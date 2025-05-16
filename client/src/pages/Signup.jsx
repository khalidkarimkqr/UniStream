import React from "react";
import Input from "../components/ui/Input";

const Signup = () => {
  return (
    <div>
      <form
        action=""
        className="sm:w-[50vw] mx-auto px-5 h-[80vh] flex flex-col justify-center gap-4"
      >
        <div className="flex gap-4">
          <Input id="firstName" type="text" placeholder="First Name Here" />
          <Input id="lastName" type="text" placeholder="Last Name Here" />
        </div>
        <Input id="email" type="email" placeholder="Email Here" />
      </form>
    </div>
  );
};

export default Signup;
