import React from "react";
import { BsPlayFill } from "react-icons/bs";
import Controllers from "./Controllers";
import Logo from "./Logo";
const Video = () => {
  return (
    <div className="h-screen  border relative flex-1 grid place-items-center">
      <Controllers />
      {/* play btn  */}

      <video
        autoPlay={true}
        className="w-screen h-screen object-cover cursor-pointer"
      >
        <source src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2Mzc3MjE1NH0.sut40p-XhaMDOJL22Fh9dc1f1aj8vOm5oH_ZO0CHs4COrWIDr61tFtfdhaEHJOfZtrWvVao019c4aTqII7CSANLhpcNRE4DKTGlTDP1Mv_riR_GpPwRhqTVnYYrQIX-2gwgOIgmVggpnZJE_gUTddjSlX77-4iqb_k1oPbLy8Hd4fY5ZC3UCLzQz-86OUyhAmaWQwdt0-0V0ynMj_OuVDz4e4pL5xUJobI4ZenGCdm5iNk87JcefFYzcjJLLKO2FvWOoHsq9txrM5NsRZPg-ts1K_fsCnHY1fLrc1pUcjtnfEatklf9SKvoCfw0LbvWCpTq6dVRJfywh1FDmZt2UYbVoebmcmN6Y_2FjWKuMNK2oEVtk8IsXE8rxP718IaZI0MsH-hKT84bvbowWFgeyHqQByuXWIQskPKus7zkVKIDkokkcSyLQTeMEP0FCoGkxhMG4vBGgZIlBppyUe9x4pjo1Ost8EhvZRLTA2Qy-sjjznaib5mRAmgcD64tLvX86uTMnokkpLn5xDNif5XMOyNzRVQk_3OUNZMHUjR4C61UyB7SYlJ2GfP7HYPO2aFwKeWUiSaOHyhzPf1riFTRPpxhE4OEcguLrQt9YmwOSdxV-rVLiOPggWrZDvHxZbNIvCLw9fmjDCOxypu1l7aEkLT4-WNkEzI29IUuI8cwi1Ss" />
      </video>
      <div className="play-btn absolute z-50 cursor-pointer">
        <button className="play-btn-icon bg-white rounded-full w-16 h-16 grid place-items-center text-4xl">
          <BsPlayFill />
        </button>
      </div>
      {/* logo  */}
      <Logo />
    </div>
  );
};

export default Video;