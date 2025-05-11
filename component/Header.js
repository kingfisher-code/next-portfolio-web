import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoHandRightSharp } from "react-icons/io5";
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src="/john-profile.jpg"
          alt=""
          width={120}
          height={120}
          className="rounded-full w-16 h-16"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Inter, sans-serif">
        Hi! I am john codez
        <IoHandRightSharp className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-(66px) font-Inter, sans-serif">
        frontend web developer based in nigeria.
      </h1>
      <p className="max-w-2xl mx-auto font-Inter, sans-serif">
        i am a frontend developer from enugu, nigeria with proper experience in
        multiple projects like portfolio website design, and also work with
        Devrise tech firm.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3  border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <FaArrowRightLong className="w-4" />
        </a>
        <a
          href="/sample"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume
          <FaDownload className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
