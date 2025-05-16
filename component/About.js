"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaGraduationCap } from "react-icons/fa6";
import { SiLanguagetool } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { VscVscode } from "react-icons/vsc";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Inter, sans-serif"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Inter, sans-serif"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src="/john-profile.jpg"
            alt=""
            width={350}
            height={350}
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Inter, sans-serif">
            I am an experienced frontend Developer with several professional
            practices in the field. Throughout my career, I have had the
            privilage of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            <motion.li
              whileInView={{ scale: 1.05 }}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-300 hover:-translate-y-1 duration-500 "
            >
              <SiLanguagetool className="w-7 mt-3" />
              <h3 className="my-4 font-semibold">Language</h3>
              <p className="text-gray-500 text-sm">
                HTML, Javascript React js,Next js
              </p>
            </motion.li>
            <motion.li
              whileInView={{ scale: 1.05 }}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-300 hover:-translate-y-1 duration-500"
            >
              <FaGraduationCap className="w-7 mt-3" />
              <h3 className="my-4 font-semibold">Education</h3>
              <p className="text-gray-500 text-sm">
                Technical skills in Software Engineering
              </p>
            </motion.li>
            <motion.li
              whileInView={{ scale: 1.05 }}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-300 hover:-translate-y-1 duration-500"
            >
              <GoProjectSymlink className="w-7 mt-3" />
              <h3 className="my-4 font-semibold">Project</h3>
              <p className="text-gray-500 text-sm">
                Built more than five projects
              </p>
            </motion.li>
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-gray-700 font-Inter, sans-serif"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <Image
                src="/vscode-icon.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <Image
                src="/icons8-firebase-24.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <Image
                src="/mongodb-icon.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <Image
                src="/icons8-figma-48.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <Image
                src="/icons8-github-logo-94.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
