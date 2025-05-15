import React from "react";

const Input = ({ type = "text", placeholder, id, onChange }) => {
  return (
    <input
      type={type}
      name={id}
      id={id}
      autoComplete="off"
      className="py-3 text-center rounded-lg w-full bg-gray-100 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-300 transition-all duration-300 ease-in-out text-gray-700 px-5"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
