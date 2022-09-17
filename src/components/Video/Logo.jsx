import React from "react";
import { MdTagFaces } from "react-icons/md";
const Logo = () => {
  return (
    <div className="logo-box z-40 absolute  left-16 bottom-16 bg-violet-700 text-white p-3 rounded-lg">
      <small>Powered By</small>
      <span className="text-xl flex items-center gap-2">
        <MdTagFaces /> Videoask
      </span>
    </div>
  );
};

export default Logo;
