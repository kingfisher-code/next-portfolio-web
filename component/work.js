"use client";

import React from "react";
import { motion } from "motion/react";
import { IoIosSend } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Inter, sans-serif"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Inter, sans-serif"
      >
        My Lastest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" text-center mb-12 mt-5 mx-auto max-w-2xl font-Inter, sans-serif"
      >
        welcome to my web development portfolio! Explore a collection of my
        showcasing my expertise in front-end development
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 my-10 gap-5"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className=" bg-[url('/man-bg.jpg')] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Frontend project</h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-ce nter justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <IoIosSend className="w-7 h-8" />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className=" bg-[url('/computer-laptop-desk.jpg')] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Geo based app</h2>
              <p className="text-sm text-gray-700">Mobile App</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-ce nter justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <IoIosSend className="w-7 h-8" />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className=" bg-[url('/business.jpg')] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Photography site</h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-ce nter justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <IoIosSend className="w-7 h-8" />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className=" bg-[url('/desk.jpg')]  aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">UI/UX designing</h2>
              <p className="text-sm text-gray-700">UI/UX design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-ce nter justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <IoIosSend className="w-7 h-8" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-300 duration-500 duration-500"
      >
        Show more <FaArrowRight className="w-5" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
