import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Form from "../components/Form";
import SecondaryButton from "../components/SecondaryButton";
import Video from "../components/Video/Video";
import { setForm } from "../features/NavigateSlice";

const SignUp = () => {
  const { form } = useSelector((state) => state.navigate);
  const dispatch = useDispatch();

  return (
    <Fade top distance="120px">
      <section className="home-page sm:flex justify-between overflow-y-hidden h-screen">
        <Video
          src={
            "https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY2Mzc3MjE1NH0.v8wYDR4VofJUMXLFt0RfyOQcm_DXgHZunZ8DLHhTbU2j1IS8_aZBr8eEFvC2UhcjrX9LgFtg0v7oIo6nT_DIoS5-qrKUxVtu5jdRQc8PnTfqtksKiiRxC29cA21PMsOA6-SpOOIF3hTrBVBn9ps4kLT3HARFyx3nsObehhH_DjsLW0RGmora8CPR86ZfHOT4-2KYu3VR5oAj--f14T1mysNzj_naMcxPrODFU7fvn_Y-K36-9iLsNXkJV4n-aVY97hO21kc0STnetrN93B_m7VCVGhOHiaDCQGL2oprTB0GAGVaGMnmqqF8uMs-a4pp7jj8n2KL7vzFKQfEAjR3ulrx20-uaEwGD9am5YldR5EJfxDZ9O464dgnyZrXodp2jxOyOmYuGiVS56C2RW82NWSzQ1Z2RtGmw2RBmOK6pZHgBxlS8ae3FfxsdObSUegrb0LmPzvJW0ytarc0PxY-BnhMVYlPSXXd0Fj04_tAjIgLW7KrjVSwDs51muBTA7Q9YACp6sFBEoliUwd3IbPCj1G6SogPXhC5otvJ6AkQb5hNhb8v_MouJRVtG0RtZPxH17W4tFTAFI8F4bALweaP6jWaDBlMZpidXxXPGhCTQNHelO7AThBbf-dFdKa4YWv0xoPgYkS9TpfgPMdBn3dqTh6KflSB-r03B9obRVG9R4xg"
          }
          heading={"Funnel 3: Webinar signup"}
        />

        <div
          className={`home-content  absolute w-full bottom-20 pl-3 sm:relative flex-1 grid items-center justify-center`}
        >
          {form ? (
            <Form />
          ) : (
            <div
              className="btn-group flex flex-col items-stretch gap-3 "
              onClick={() =>
                dispatch(setForm({ coaching: false, signUp: true }))
              }
            >
              <SecondaryButton
                handleNavigateSignUpForm={"handleNavigateSignUpForm"}
                className="btn"
              >
                Sign Up for free Webinar
              </SecondaryButton>
            </div>
          )}
        </div>
      </section>
    </Fade>
  );
};

export default SignUp;
