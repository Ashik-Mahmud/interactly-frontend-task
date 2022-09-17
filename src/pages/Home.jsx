import React from "react";
import Video from "../components/Video";

const Home = () => {
  return (
    <section className="home-page flex  justify-between sm:overflow-y-hidden">
      <Video />
      <div className="home-content flex-1 grid items-center justify-center">
        <div className="btn-group flex flex-col items-stretch gap-3 ">
          <button className="pl-3 pr-52 border rounded-full py-3 flex items-center gap-4 bg-gray-50 hover:border-fuchsia-700">
            <span className="w-8 h-8 rounded-full bg-fuchsia-700 grid place-items-center  text-white">
              A
            </span>
            <span>Campaign Structure</span>
          </button>
          <button className="pl-3 pr-52 border rounded-full py-3 flex items-center gap-4 bg-gray-50 hover:border-fuchsia-700">
            <span className="w-8 h-8 rounded-full bg-fuchsia-700 grid place-items-center text-white">
              B
            </span>
            <span>Learn Facebook Basics</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
