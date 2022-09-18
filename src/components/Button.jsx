import React from "react";

const Button = ({ label, text, handleNavigate }) => {
  return (
    <button
      onClick={handleNavigate}
      className="pl-3 w-full pr-20 sm:pr-52 border-black sm:border sm:border-gray-100 rounded-full py-3 flex items-center gap-4 bg-[#00000085] sm:bg-gray-50 hover:border-fuchsia-700"
    >
      <span className="w-8 h-8 rounded-full bg-fuchsia-700 grid place-items-center text-white">
        {label}
      </span>
      <span className="text-white sm:text-black">{text}</span>
    </button>
  );
};

export default Button;
