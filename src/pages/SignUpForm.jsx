import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

const SignUpForm = () => {
  return (
    <div className="p-10 px-24">
      <form action="">
        <h3 className="text-2xl font-medium">
          Before you go, please leave your contact details so we can get back to
          you...
        </h3>
        <div className="input-group w-full flex flex-col gap-6 my-5">
          <input
            type="text"
            className="w-full text-xl border-t-none border-b border-b-gray-400 p-3 outline-none "
            placeholder="*Your Name"
          />
          <input
            type="email"
            className="w-full text-xl border-t-none border-b border-b-gray-400 p-3 outline-none "
            placeholder="*Your Email"
          />
        </div>

        <div className="input-group flex items-start mt-9 gap-3">
          <input type="checkbox" name="" className="text-2xl" id="" />
          <label htmlFor="" className="text-base leading-relaxed text-gray-600">
            * [Sample legal text] The personal data you have provided will be
            processed by XXXXX for purposes of providing you the service. The
            legal basis of the processing is XXXXX. Your data will not be
            transferred nor assigned to third parties. You can exercise your
            right to access, rectify and delete your data, as well as the other
            rights granted by law by sending an email to XXXXX. For further
            information, please check our privacy policy XXXXX.
          </label>
        </div>
        <div className="btn relative z-20">
          <button
            type="button"
            className="text-white bg-[#7d00fe] py-5 w-full rounded-md flex items-center gap-3 justify-center mt-7 text-xl hover:scale-100 duration-75 hover:bg-[##912ef5]"
          >
            Send Your Answer <BsArrowDownRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
