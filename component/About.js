import React from "react";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa6";
import { SiLanguagetool } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { VscVscode } from "react-icons/vsc";
const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Inter, sans-serif">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-Inter, sans-serif">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/john-profile.jpg"
            alt=""
            width={350}
            height={350}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Inter, sans-serif">
            I am an experienced frontend Developer with several professional
            practices in the field. Throughout my career, I have had the
            privilage of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-300 hover:-translate-y-1 duration-500 ">
              <SiLanguagetool className="w-7 mt-3" />
              <h3 className="my-4 font-semibold">Language</h3>
              <p className="text-gray-500 text-sm">
                HTML, Javascript React js,Next js
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-300 hover:-translate-y-1 duration-500">
              <FaGraduationCap className="w-7 mt-3" />
              <h3 className="my-4 font-semibold">Education</h3>
              <p className="text-gray-500 text-sm">
                Technical skills in Software Engineering
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-300 hover:-translate-y-1 duration-500">
              <GoProjectSymlink className="w-7 mt-3" />
              <h3 className="my-4 font-semibold">Project</h3>
              <p className="text-gray-500 text-sm">
                Built more than five projects
              </p>
            </li>
          </ul>
          <h4 className="my-6 text-gray-700 font-Inter, sans-serif">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <Image
                src="/vscode-icon.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <Image
                src="/icons8-firebase-24.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <Image
                src="/mongodb-icon.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <Image
                src="/icons8-figma-48.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <Image
                src="/icons8-github-logo-94.png"
                alt=""
                width={100}
                height={100}
                className="w-5 sm:w-7"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
