import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  return (
    <div>
      <form className="sm:w-[50vw] mx-auto px-5 h-[80vh] flex flex-col justify-center gap-4">
        <Input id="email" type="email" placeholder="Email Here" />
        <Input id="password" type="password" placeholder="Password Here" />
        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
