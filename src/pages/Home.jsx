import React, { useState } from "react";
import Button from "../components/Button";
import Video from "../components/Video/Video";
import Structure from "./Structure";

const Home = () => {
  const [navigate, setNavigate] = useState("");

  /* Handle Campaign  */
  const handleNavigateCampaign = () => {
    setNavigate("funnel1");
  };
  /* 
  Handle Navigate Facebook Basic Page */

  const handleNavigateFacebook = () => {
    setNavigate("funnel2");
  };

  if (navigate === "funnel1") {
    return (
      <Structure
        src={
          "https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY2Mzc3MjE1M30.fmXaVA13m2hFJN-UArow9t30B9jfQGZAUnXrnmJNUSAiRBd-eot-CJRXZqVkO7PJSoJVN_HR_ZIzwmDx7K0LENFwQowEUgl_kRZymDgkSXc5Fl3kYA5A8oaT47tK4ClMDUoqO1WmIs0s-cBhvEdapuujkr3_pn6LcUIFTXpr33IneyCzRoMOSNjYN2Vaiesx9-pcaR6b3cGgMrJf3-iGzdzkUWKc2o25WjLRxVHDrlC2qckQ78zDjSyyJtAf-MBlHmSHXi4HOh_dAf-6qhpMmTJ6VxXvWuiSu6ExOQsDTIxJhyOkaqCUeiJhqz1QAucz7U7zDc0obF0My6iZ2LWZX-BzQzXcRkZzDxig1NG5R36AOEaJKUvvc9EFA3EMFJk3wEoHB_EzeA5op6swo1WFHSVwfe7NzF4YNrpWG-jIZmAYb0qh8F2BcQNdAAWFaz_xMRl63pu81KAyJIPJKjm-TZT_pVGAz2W0V6A7fZcTtkhsbQCd9ndqIugR_r1eNEnOB106HCqsJEzs3_xY7_EBGB7igupzuYVVnHXQ31w9SRXQHqfvNhODxY8aj0rAvnb1p_UN7iEmBuNcvrgdI2IwFBqmOVSXG5douelw0zyd5dU9_i4gV5wXs_6P9EyeypmGYBJnUQdWcYRWc-1GiBEG4o1dXbVgxHKJ_zNdQmpvr3c"
        }
        btnText={'Download "Campaign Structure Guide"'}
        head={"Funnel 2: Freebie or Coaching"}
      />
    );
  }
  if (navigate === "funnel2") {
    return (
      <Structure
        src={
          "https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY2Mzc3MjE1NH0.v8wYDR4VofJUMXLFt0RfyOQcm_DXgHZunZ8DLHhTbU2j1IS8_aZBr8eEFvC2UhcjrX9LgFtg0v7oIo6nT_DIoS5-qrKUxVtu5jdRQc8PnTfqtksKiiRxC29cA21PMsOA6-SpOOIF3hTrBVBn9ps4kLT3HARFyx3nsObehhH_DjsLW0RGmora8CPR86ZfHOT4-2KYu3VR5oAj--f14T1mysNzj_naMcxPrODFU7fvn_Y-K36-9iLsNXkJV4n-aVY97hO21kc0STnetrN93B_m7VCVGhOHiaDCQGL2oprTB0GAGVaGMnmqqF8uMs-a4pp7jj8n2KL7vzFKQfEAjR3ulrx20-uaEwGD9am5YldR5EJfxDZ9O464dgnyZrXodp2jxOyOmYuGiVS56C2RW82NWSzQ1Z2RtGmw2RBmOK6pZHgBxlS8ae3FfxsdObSUegrb0LmPzvJW0ytarc0PxY-BnhMVYlPSXXd0Fj04_tAjIgLW7KrjVSwDs51muBTA7Q9YACp6sFBEoliUwd3IbPCj1G6SogPXhC5otvJ6AkQb5hNhb8v_MouJRVtG0RtZPxH17W4tFTAFI8F4bALweaP6jWaDBlMZpidXxXPGhCTQNHelO7AThBbf-dFdKa4YWv0xoPgYkS9TpfgPMdBn3dqTh6KflSB-r03B9obRVG9R4xg"
        }
        btnText={"Sign Up for free Webinar"}
        head={"Funnel 3: Webinar signup"}
      />
    );
  }

  return (
    <>
      <section className="home-page sm:flex justify-between overflow-y-hidden">
        <Video
          heading={"Welcome"}
          src={
            "https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2Mzc3MjE1NH0.sut40p-XhaMDOJL22Fh9dc1f1aj8vOm5oH_ZO0CHs4COrWIDr61tFtfdhaEHJOfZtrWvVao019c4aTqII7CSANLhpcNRE4DKTGlTDP1Mv_riR_GpPwRhqTVnYYrQIX-2gwgOIgmVggpnZJE_gUTddjSlX77-4iqb_k1oPbLy8Hd4fY5ZC3UCLzQz-86OUyhAmaWQwdt0-0V0ynMj_OuVDz4e4pL5xUJobI4ZenGCdm5iNk87JcefFYzcjJLLKO2FvWOoHsq9txrM5NsRZPg-ts1K_fsCnHY1fLrc1pUcjtnfEatklf9SKvoCfw0LbvWCpTq6dVRJfywh1FDmZt2UYbVoebmcmN6Y_2FjWKuMNK2oEVtk8IsXE8rxP718IaZI0MsH-hKT84bvbowWFgeyHqQByuXWIQskPKus7zkVKIDkokkcSyLQTeMEP0FCoGkxhMG4vBGgZIlBppyUe9x4pjo1Ost8EhvZRLTA2Qy-sjjznaib5mRAmgcD64tLvX86uTMnokkpLn5xDNif5XMOyNzRVQk_3OUNZMHUjR4C61UyB7SYlJ2GfP7HYPO2aFwKeWUiSaOHyhzPf1riFTRPpxhE4OEcguLrQt9YmwOSdxV-rVLiOPggWrZDvHxZbNIvCLw9fmjDCOxypu1l7aEkLT4-WNkEzI29IUuI8cwi1Ss"
          }
        />

        <div className="home-content absolute w-full bottom-20 pl-3 sm:relative flex-1 grid items-center justify-center">
          <div className="btn-group flex flex-col items-stretch gap-3 ">
            <Button
              label={"A"}
              text="Campaign Structure"
              handleNavigate={handleNavigateCampaign}
            />
            <Button
              label={"B"}
              text="Learn Facebook Basics"
              handleNavigate={handleNavigateFacebook}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
