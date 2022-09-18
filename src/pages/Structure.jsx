import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import Video from "../components/Video/Video";

const Structure = ({ src, btnText, head }) => {
  return (
    <section className="home-page sm:flex justify-between overflow-y-hidden">
      <Video heading={head} src={src} />

      <div className="home-content  absolute w-full bottom-20 pl-3 sm:relative flex-1 grid items-center justify-center">
        <div className="btn-group flex flex-col items-stretch gap-3 ">
          <SecondaryButton className="btn">{btnText}</SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default Structure;
