import React, { useState } from "react";

const SignUpCard = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

    try {
      const response = await fetch(`${baseUrl}/postdetails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Sign-up successful!");
        setFormData({ name: "", email: "" });
      } else {
        setMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[70%] h-[50%] p-[2px] rounded-2xl bg-gradient-to-r from-[rgb(204,0,255)] to-[#FF005E]">
        <div className="w-full h-full bg-black text-white rounded-2xl p-4 flex justify-center flex-col items-center md:items-start">
          <h1 className="closer text-[20px] text-center md:text-left md:text-[44px] text-transparent bg-clip-text bg-gradient-to-r from-[#CC00FF] to-[#FF005E] leading-none whitespace-nowrap capitalize">
            Your next gig is closer <br /> than you think!
          </h1>

          <p className="mt-4 text-sm text-center md:text-left text-gray-400">
            Sign up now to be the first in line for exclusive launch updates. A
            new era of freelancing is just around the corner!
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-1 rounded-md text-black focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
          {message && (
            <p className="mt-4 text-sm text-center text-green-400">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
