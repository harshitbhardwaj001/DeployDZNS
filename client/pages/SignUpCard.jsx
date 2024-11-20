import React from "react";

const SignUpCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div
  className="w-[70%] h-[50%] p-[2px] rounded-2xl bg-gradient-to-r from-[#CC00FF] to-[#FF005E]"
>
  <div className="w-full h-full bg-black text-white rounded-2xl p-4">
        <h1 className="closer text-transparent bg-clip-text bg-gradient-to-r from-[#CC00FF] to-[#FF005E] leading-none whitespace-nowrap capitalize">
  Your next gig is closer <br /> than you think!
</h1>


        <p className="mt-4 text-sm text-gray-400">
          Sign up now to be the first in line for exclusive launch updates. A
          new era of freelancing is just around the corner!
        </p>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-1 rounded-md text-black focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-1 rounded-md text-black focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <div className="flex justify-center items-center">
  <button
    type="submit"
    className="w-[40%] py-1 text-white rounded-lg bg-gradient-to-r from-[#CC00FF] to-[#FF005E] hover:opacity-90"
  >
    Sign up
  </button>
</div>

        </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
