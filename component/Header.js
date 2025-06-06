"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoHandRightSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/john-profile.jpg"
          alt=""
          width={120}
          height={120}
          className="rounded-full w-16 h-16"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Inter, sans-serif"
      >
        Hi! I am john codez
        <IoHandRightSharp className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-(66px) font-Inter, sans-serif"
      >
        frontend web developer based in nigeria.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Inter, sans-serif"
      >
        i am a frontend developer from enugu, nigeria with proper experience in
        multiple projects like portfolio website design, and also work with
        Devrise tech firm.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3  border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <FaArrowRightLong className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume
          <FaDownload className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
