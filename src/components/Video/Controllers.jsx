import React, { useRef, useState } from "react";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { GoMute, GoUnmute } from "react-icons/go";

const Controllers = ({
  currentTime,
  progress,
  handleSpeedButton,
  speed,
  handleFullScreen,
  fullScreen,
  heading,
  duration,
  videoRef,
}) => {
  const [mute, setMute] = useState(false);

  /* Handle Progressbar Forward Backward */
  const progressRef = useRef(null);

  const handleProgressbar = (event) => {
    const width = progressRef.current.clientWidth;
    const clientX = event.clientX;
    videoRef.current.currentTime = (clientX / width) * duration;
  };

  /* Handle Mute/Unmute */
  const handleMute = () => {
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      setMute(false);
    } else {
      videoRef.current.muted = true;
      setMute(true);
    }
  };

  /* All Organized Time */
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  return (
    <div className="video-options absolute left-0 top-0 w-full select-none">
      {/* progressbar  */}
      <div
        onClick={handleProgressbar}
        ref={progressRef}
        className="progressbar -top-1 w-full h-3 bg-gray-500 relative cursor-pointer z-50 duration-75 hover:h-5"
      >
        <small
          className="progress absolute h-full grid cursor-pointer place-items-center bg-violet-700 left-0 top-0"
          style={{ width: progress + "%" }}
        ></small>
      </div>
      {/* controls options  */}
      <div className="controls flex justify-between pt-10 px-10 z-20 relative">
        <div className="heading ">
          {seconds < 3 && (
            <h2 className="text-3xl absolute top-20 text-white font-medium">
              {heading}
            </h2>
          )}
        </div>
        <div className="control-options flex items-center gap-4 cursor-pointer">
          {/* durations  */}
          <div className="durations text-white " title="Times">
            <span className="current-time">
              {minutes || " 00 "}:
              {(seconds < 10 ? "0" + seconds : seconds) || " 00 "}
            </span>{" "}
            /
            <span className="total-time">
              {" "}
              {totalMinutes || " 00 "}:
              {(totalSeconds < 10 ? "0" + totalSeconds : totalSeconds) ||
                " 00 "}
            </span>
          </div>
          {/* captions  */}
          <div className="captions">
            <small
              className="caption border-2  w-10  h-7 grid place-items-center rounded-md hover:bg-white duration-75 hover:scale-110 hover:text-black text-white font-bold"
              title="Captions"
              onClick={() => alert("Captions not available")}
            >
              CC
            </small>
          </div>
          {/* speed */}
          <div className="speed">
            <small
              onClick={handleSpeedButton}
              className="speed-icon border-2 w-10  h-7 grid place-items-center  rounded-md hover:bg-white duration-75 hover:scale-110 hover:text-black text-white font-bold"
              title="Speed"
            >
              {speed}x
            </small>
          </div>
          {/* Muted */}
          <div className="speed">
            <small
              onClick={handleMute}
              className="speed-icon border-2 w-10 text-lg  h-7 grid place-items-center  rounded-md hover:bg-white duration-75 hover:scale-110 hover:text-black text-white font-bold"
              title={mute ? "Unmute" : "Mute"}
            >
              {mute ? <GoMute /> : <GoUnmute />}
            </small>
          </div>
          {/* screen */}
          <div className="screen">
            <small
              onClick={handleFullScreen}
              className="screen-icon border-2 w-10  h-7 grid place-items-center   text-lg rounded-md hover:bg-white duration-75 hover:scale-110 hover:text-black text-white font-bold"
              title="Full screen"
            >
              {fullScreen ? <BiExitFullscreen /> : <BiFullscreen />}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controllers;
