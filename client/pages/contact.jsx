import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

const contact = () => {
  const [clicked, setClicked] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9gwzr2h",
        "template_ap73vof",
        form.current,
        "h8q0CHU-G5Dv2QR7V"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!!");
        },
        (error) => {
          console.log(error.text);
          alert("Not able to send the message currently!!");
        }
      );
  };
  return (
    <>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="min-h-[80vh] relative my-10 mt-[-1.25rem] top-[6rem] px-32">
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] xs:max-md:ml-[-8rem]">
              <h1 className="w-full text-center text-[3rem] mb-[3rem] font-semibold xs:max-md:text-[2rem]">
                Contact Us
              </h1>
              <form action="https://formbold.com/s/FORM_ID" ref={form}>
                <div className="mb-5">
                  <label
                    for="name"
                    className="mb-3 block text-base font-medium text-[#fff]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-[#30313D] py-3 px-6 text-base font-medium text-[#F4FF00] outline-none focus:border-[#000] focus:shadow-md xs:max-md:w-[200px]"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="email"
                    className="mb-3 block text-base font-medium text-[#fff]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-[#30313D] py-3 px-6 text-base font-medium text-[#F4FF00] outline-none focus:border-[#000] focus:shadow-md xs:max-md:w-[200px]"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="subject"
                    className="mb-3 block text-base font-medium text-[#fff]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-[#30313D] py-3 px-6 text-base font-medium text-[#F4FF00] outline-none focus:border-[#000] focus:shadow-md xs:max-md:w-[200px]"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="message"
                    className="mb-3 block text-base font-medium text-[#fff]"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#30313D] py-3 px-6 text-base font-medium text-[#F4FF00] outline-none focus:border-[#000] focus:shadow-md xs:max-md:w-[200px]"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="border items-center border-[#F4FF00] bg-[#F4FF00] px-5 text-black py-3 font-bold text-lg mt-5 rounded-md w-full xs:max-md:w-[200px]"
                    onClick={sendEmail}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="flex justify-center my-7 mt-[15rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default contact;
