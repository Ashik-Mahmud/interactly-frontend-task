import React, { useState } from "react";
import Video from "../components/Video/Video";
import SecondaryButton from "./../components/SecondaryButton";
import SignUpForm from "./SignUpForm";

const Structure = ({ src, btnText, head }) => {
  const [navigate, setNavigate] = useState(false);

  /* handle Navigate to SignUp form */
  const handleNavigateSignUpForm = () => {
    setNavigate(true);
  };
  return (
    <section className="home-page sm:flex justify-between overflow-y-hidden">
      <Video heading={head} src={src} />

      <div
        className={`home-content  absolute w-full bottom-20 pl-3 sm:relative flex-1 grid items-center justify-center`}
      >
        {navigate ? (
          <SignUpForm />
        ) : (
          <div className="btn-group flex flex-col items-stretch gap-3 ">
            <SecondaryButton
              handleNavigateSignUpForm={handleNavigateSignUpForm}
              className="btn"
            >
              {btnText}
            </SecondaryButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default Structure;
