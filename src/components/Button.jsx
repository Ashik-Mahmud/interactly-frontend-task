import React from "react";

const Button = ({ label, text }) => {
  return (
    <button className="pl-3 pr-52 border rounded-full py-3 flex items-center gap-4 bg-gray-50 hover:border-fuchsia-700">
      <span className="w-8 h-8 rounded-full bg-fuchsia-700 grid place-items-center text-white">
        {label}
      </span>
      <span>{text}</span>
    </button>
  );
};

export default Button;
