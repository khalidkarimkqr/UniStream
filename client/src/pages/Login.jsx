/* eslint-disable no-unused-vars */
import { React, useContext } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const payload = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        payload
      );

      const data = await res.data;

      if (data.success) {
        toast.success(data.message);
        e.target.reset();
        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem("token", data.data.token);
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
