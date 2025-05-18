import { React, useContext, useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { setUser, setIsAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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
        setUser(data.data.user);
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
      <form
        onSubmit={handleSubmit}
        className="sm:w-[50vw] mx-auto px-5 h-[80vh] flex flex-col justify-center gap-4"
      >
        <Input id="email" type="email" placeholder="Email Here" />
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password Here"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 cursor-pointer text-xl"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
