import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Form from "../components/Form";
import SecondaryButton from "../components/SecondaryButton";
import Video from "../components/Video/Video";
import { setForm } from "../features/NavigateSlice";

const Campaign = () => {
  const { form } = useSelector((state) => state.navigate);
  const dispatch = useDispatch();

  return (
    <Fade top distance="120px">
      <section className="home-page sm:flex justify-between overflow-y-hidden h-screen">
        <Video
          src={
            "https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY2Mzc3MjE1M30.fmXaVA13m2hFJN-UArow9t30B9jfQGZAUnXrnmJNUSAiRBd-eot-CJRXZqVkO7PJSoJVN_HR_ZIzwmDx7K0LENFwQowEUgl_kRZymDgkSXc5Fl3kYA5A8oaT47tK4ClMDUoqO1WmIs0s-cBhvEdapuujkr3_pn6LcUIFTXpr33IneyCzRoMOSNjYN2Vaiesx9-pcaR6b3cGgMrJf3-iGzdzkUWKc2o25WjLRxVHDrlC2qckQ78zDjSyyJtAf-MBlHmSHXi4HOh_dAf-6qhpMmTJ6VxXvWuiSu6ExOQsDTIxJhyOkaqCUeiJhqz1QAucz7U7zDc0obF0My6iZ2LWZX-BzQzXcRkZzDxig1NG5R36AOEaJKUvvc9EFA3EMFJk3wEoHB_EzeA5op6swo1WFHSVwfe7NzF4YNrpWG-jIZmAYb0qh8F2BcQNdAAWFaz_xMRl63pu81KAyJIPJKjm-TZT_pVGAz2W0V6A7fZcTtkhsbQCd9ndqIugR_r1eNEnOB106HCqsJEzs3_xY7_EBGB7igupzuYVVnHXQ31w9SRXQHqfvNhODxY8aj0rAvnb1p_UN7iEmBuNcvrgdI2IwFBqmOVSXG5douelw0zyd5dU9_i4gV5wXs_6P9EyeypmGYBJnUQdWcYRWc-1GiBEG4o1dXbVgxHKJ_zNdQmpvr3c"
          }
          heading={"Funnel 2: Freebie or Coaching"}
        />

        <div
          className={`home-content  absolute w-full bottom-20 pl-3 sm:relative flex-1 grid items-center justify-center`}
        >
          {form ? (
            <Form />
          ) : (
            <div className="btn-group flex flex-col items-stretch gap-3 ">
              <div
                className="btn-container"
                onClick={() =>
                  dispatch(
                    setForm({
                      coaching: true,
                      signUp: false,
                      home: false,
                      form: true,
                    })
                  )
                }
              >
                <SecondaryButton className="btn">
                  Download "Campaign Structure Guide"
                </SecondaryButton>
              </div>
            </div>
          )}
        </div>
      </section>
    </Fade>
  );
};

export default Campaign;
