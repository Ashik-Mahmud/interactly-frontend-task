import React from "react";
import Button from "../components/Button";
import Video from "../components/Video/Video";

const Home = () => {
  return (
    <section className="home-page flex  justify-between sm:overflow-y-hidden">
      <Video />
      <div className="home-content flex-1 grid items-center justify-center">
        <div className="btn-group flex flex-col items-stretch gap-3 ">
          <Button label={"A"} text="Campaign Structure" />
          <Button label={"B"} text="Learn Facebook Basics" />
        </div>
      </div>
    </section>
  );
};

export default Home;
