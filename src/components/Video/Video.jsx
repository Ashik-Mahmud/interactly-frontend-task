import React, { useEffect, useRef, useState } from "react";
import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
import Controllers from "./Controllers";
import Logo from "./Logo";
const Video = () => {
  /* operations of Video Controllers  */
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);

  /* get video object */
  const videoRef = useRef(null);

  /* Handle Play Pause Button */
  const handlePlayBtn = () => {
    setInterval(() => {
      setCurrentTime(videoRef.current.currentTime);
    }, 1200);
    videoRef.current.play();
    setIsPlaying(true);

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  /* Get and Handle Durations  */
  useEffect(() => {
    setProgress((currentTime / duration) * 100);
    setDuration(videoRef.current.duration);
    if ((currentTime / duration) * 100 === 100) {
      setIsPlaying(false);
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, [currentTime, duration]);

  /* All Organized Time */
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  /* Handle Speed Button */

  const handleSpeedButton = () => {
    const speedArray = [1, 1.25, 1.5, 1.75, 2];

    const currentSpeedIndex = speedArray.indexOf(speed);
    const nextSpeedIndex = currentSpeedIndex + 1;
    const nextSpeed = speedArray[nextSpeedIndex];
    if (nextSpeed) {
      setSpeed(nextSpeed);
      videoRef.current.playbackRate = nextSpeed;
    } else {
      setSpeed(1);
      videoRef.current.playbackRate = 1;
    }
  };

  return (
    <div className="h-screen  border relative flex-1 grid place-items-center">
      <Controllers
        minutes={minutes}
        seconds={seconds}
        totalMinutes={totalMinutes}
        totalSeconds={totalSeconds}
        progress={progress}
        handleSpeedButton={handleSpeedButton}
        speed={speed}
      />
      {/* play btn  */}

      <video
        className="w-screen h-screen object-cover cursor-pointer"
        ref={videoRef}
        onClick={handlePlayBtn}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2Mzc3MjE1NH0.sut40p-XhaMDOJL22Fh9dc1f1aj8vOm5oH_ZO0CHs4COrWIDr61tFtfdhaEHJOfZtrWvVao019c4aTqII7CSANLhpcNRE4DKTGlTDP1Mv_riR_GpPwRhqTVnYYrQIX-2gwgOIgmVggpnZJE_gUTddjSlX77-4iqb_k1oPbLy8Hd4fY5ZC3UCLzQz-86OUyhAmaWQwdt0-0V0ynMj_OuVDz4e4pL5xUJobI4ZenGCdm5iNk87JcefFYzcjJLLKO2FvWOoHsq9txrM5NsRZPg-ts1K_fsCnHY1fLrc1pUcjtnfEatklf9SKvoCfw0LbvWCpTq6dVRJfywh1FDmZt2UYbVoebmcmN6Y_2FjWKuMNK2oEVtk8IsXE8rxP718IaZI0MsH-hKT84bvbowWFgeyHqQByuXWIQskPKus7zkVKIDkokkcSyLQTeMEP0FCoGkxhMG4vBGgZIlBppyUe9x4pjo1Ost8EhvZRLTA2Qy-sjjznaib5mRAmgcD64tLvX86uTMnokkpLn5xDNif5XMOyNzRVQk_3OUNZMHUjR4C61UyB7SYlJ2GfP7HYPO2aFwKeWUiSaOHyhzPf1riFTRPpxhE4OEcguLrQt9YmwOSdxV-rVLiOPggWrZDvHxZbNIvCLw9fmjDCOxypu1l7aEkLT4-WNkEzI29IUuI8cwi1Ss" />
      </video>

      {!isPlaying && (
        <div className="play-btn absolute z-50 cursor-pointer">
          <button
            className="play-btn-icon bg-[#ffffffa4] rounded-full w-20 h-20 grid place-items-center text-5xl"
            onClick={handlePlayBtn}
          >
            {isPlaying ? <BsFillPauseFill /> : <BsPlayFill />}
          </button>
        </div>
      )}

      {/* logo  */}
      <Logo />
    </div>
  );
};

export default Video;
