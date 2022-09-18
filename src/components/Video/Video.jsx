import React, { useEffect, useRef, useState } from "react";
import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
import Controllers from "./Controllers";
import Logo from "./Logo";
const Video = ({ heading, src }) => {
  /* operations of Video Controllers  */
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [fullScreen, setFullScreen] = useState(false);

  /* get video object */
  const videoRef = useRef(null);

  /* Handle Play Pause Button */
  const handlePlayBtn = () => {
    videoRef.current.play();
    setIsPlaying(true);

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  /* Get and Handle Durations  */
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(videoRef.current?.currentTime);
      setDuration(videoRef.current?.duration);
    }, 1200);
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

  /* Handle Playback Speed Button */
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

  /* Handle Full Screen Mode */
  const handleFullScreen = () => {
    setFullScreen((prevState) => !prevState);
  };

  return (
    <div
      className={`h-screen  ${
        fullScreen ? " w-screen fixed z-50" : "flex-1 relative"
      } border  grid place-items-center `}
    >
      <Controllers
        minutes={minutes}
        seconds={seconds}
        totalMinutes={totalMinutes}
        totalSeconds={totalSeconds}
        progress={progress}
        handleSpeedButton={handleSpeedButton}
        speed={speed}
        handleFullScreen={handleFullScreen}
        fullScreen={fullScreen}
        heading={heading}
        duration={duration}
        videoRef={videoRef}
      />
      {/* play btn  */}

      <video
        className="w-screen h-screen object-cover cursor-pointer"
        ref={videoRef}
        onClick={handlePlayBtn}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} />
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
