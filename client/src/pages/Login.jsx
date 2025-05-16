import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  return (
    <div>
      <form>
        <Input id="email" type="email" placeholder="Email Here" />
        <Input id="password" type="password" placeholder="Password Here" />
        <Button text="login" />
      </form>
    </div>
  );
};

export default Login;
