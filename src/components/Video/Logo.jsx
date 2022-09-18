import React from "react";
import { MdTagFaces } from "react-icons/md";
const Logo = () => {
  return (
    <div className="logo-box z-40 fixed bottom-0 left-0 w-full flex justify-center gap-4 sm:block sm:w-auto sm:absolute  sm:left-16 sm:bottom-16 bg-violet-700 text-white p-2 sm:p-3 sm:rounded-lg">
      <small>Powered By</small>
      <span className="text-xl flex items-center gap-2">
        <MdTagFaces /> Videoask
      </span>
    </div>
  );
};

export default Logo;
