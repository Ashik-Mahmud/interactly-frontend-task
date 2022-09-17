import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <button className="px-10 bg-[#7d00fe] text-white rounded-2xl text-lg py-4 hover:bg-[#891df5] duration-75 hover:scale-105">
      {children}
    </button>
  );
};

export default SecondaryButton;
