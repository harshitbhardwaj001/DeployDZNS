import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

const service = () => {
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
      <div className="nav overflow-hidden h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"} overflow-hidden`}>
        <div className="bg-services-bg w-[100vw] h-[100vh] bg-cover bg-no-repeat opacity-[0.03]"></div>
        <div className="absolute w-[80%] h-[80%] bg-black bg-opacity-50 xl:left-[10rem] top-[8rem] left-[15.5rem] rounded-xl flex xs:max-md:flex-col xs:max-md:left-[2rem] xs:max-md:h-auto">
          <h1 className="w-[49%] text-[12rem] xl:text-[6.2rem] p-[4rem] pl-[5rem] font-black text-white opacity-100 xs:max-md:text-[2rem] xs:max-md:w-full xs:max-md:p-[1rem] xs:max-md:text-center">
            DO YOU WANT TO <span className="text-[#F4FF00]">WORK WITH US?</span>
          </h1>
          <div className="flex items-center justify-center p-12 xs:max-md:w-full w-[50%]">
            <div className="mx-auto w-full max-w-[550px]">
              {/* <h1 className="w-full text-center text-[3rem] mb-[3rem] xl:hidden font-semibold xs:max-md:text-[2rem]">
                Contact Us
              </h1> */}
              <form action="https://formbold.com/s/FORM_ID" ref={form}>
                <div className="mb-[3rem] xl:mb-5 mt-[1rem] xs:max-md:mt-[-1rem] xs:max-md:mb-[1.2rem]">
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
                <div className="mb-[3rem] xl:mb-5 xs:max-md:mb-[1.2rem]">
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
                <div className="mb-[3rem] xl:mb-5 xs:max-md:mb-[1.2rem]">
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
                <div className="mb-[3rem] xl:mb-5 xs:max-md:mb-[1.2rem]">
                  <label
                    for="message"
                    className="mb-3 block text-base font-medium text-[#fff]"
                  >
                    Work Description
                  </label>
                  <textarea
                    rows="2"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#30313D] py-3 px-6 text-base font-medium text-[#F4FF00] outline-none focus:border-[#000] focus:shadow-md xs:max-md:w-[200px]"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="border items-center border-[#F4FF00] bg-[#F4FF00] px-5 text-black py-3 font-bold text-lg mt-1 rounded-md w-full xs:max-md:w-[200px]"
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

export default service;
