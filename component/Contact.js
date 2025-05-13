"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/water-drop-background.jpg')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-Inter, sans-serif">
        Connect with me
      </h4>
      <h2 className="text-center text-5xl font-Inter, sans-serif">
        Get in touch
      </h2>
      <p className=" text-center mb-12 mt-5 mx-auto max-w-2xl font-Inter, sans-serif">
        I do love to hear from you! if you have any question, comments, or
        feedbacks, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Submit now <FaArrowRight className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
