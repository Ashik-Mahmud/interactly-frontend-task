import React from "react";
import { AiOutlineFullscreen } from "react-icons/ai";

const Controllers = () => {
  return (
    <div className="video-options absolute left-0 top-0 w-full">
      {/* progressbar  */}
      <div className="progressbar -top-1 w-full h-3 bg-gray-500 relative cursor-move z-10 ">
        <small className="progress absolute w-1/2 h-full grid place-items-center bg-violet-700 left-0 top-0"></small>
      </div>
      {/* controls options  */}
      <div className="controls flex justify-between pt-10 px-10 z-20 relative">
        <div className="heading ">
          <h2 className="text-3xl absolute top-20 text-white font-medium">
            Tile Goes Here
          </h2>
        </div>
        <div className="control-options flex items-center gap-4 cursor-pointer">
          {/* durations  */}
          <div className="durations text-white ">
            <span className="current-time">0:00</span> /
            <span className="total-time"> 0:00</span>
          </div>
          {/* captions  */}
          <div className="captions">
            <small
              className="caption border-2  w-10  h-7 grid place-items-center rounded-md hover:bg-white hover:text-black text-white font-bold"
              title="Captions"
            >
              CC
            </small>
          </div>
          {/* speed */}
          <div className="speed">
            <small className="speed-icon border-2 w-10  h-7 grid place-items-center  rounded-md hover:bg-white hover:text-black text-white font-bold">
              1x
            </small>
          </div>
          {/* screen */}
          <div className="screen">
            <small
              className="screen-icon border-2 w-10  h-7 grid place-items-center   text-lg rounded-md hover:bg-white hover:text-black text-white font-bold"
              title="Full screen"
            >
              <AiOutlineFullscreen />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controllers;