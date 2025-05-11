import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { TiVendorAndroid } from "react-icons/ti";
import { FaBehance } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const Services = () => {
  return (
    <div id="service" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Inter, sans-serif">
        What I offer
      </h4>
      <h2 className="text-center text-5xl font-Inter, sans-serif">
        My Services
      </h2>
      <p className=" text-center mb-12 mt-5 mx-auto max-w-2xl font-Inter, sans-serif">
        I am an experienced frontend Developer with several professional
        practices in the field. Throughout my career, I have had the .privilage
        of collaborating with prestigiouds organizations, contributing to their
        success and growth.
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 my-10 ">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-2xs  hover:bg-gray-400 hover:-translate-y-1 duration-500">
          <TfiWorld className="w-10 h-10 bg-pink-600 p-2 rounded-half  " />
          <h3 className="text-lg my-4 text-gray-700">Web design</h3>
          <p className="text-sm text-gray-600 leading-5">
            Web development is the processing of building,programming...
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-gray-400 hover:-translate-y-1 duration-500">
          <TiVendorAndroid className="w-10 h-10 bg-pink-600 p-1 rounded-half" />
          <h3 className="text-lg my-4 text-gray-700">Mobile app</h3>
          <p className="text-sm text-gray-600 leading-5">
            Mobile app development involves creating software for mobile
            devices...
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-gray-400 hover:-translate-y-1 duration-500">
          <FaBehance className="w-10 h-10 p-2 bg-pink-600 rounded-half" />
          <h3 className="text-lg my-4 text-gray-700">UI/UX design</h3>
          <p className="text-sm text-gray-600 leading-5">
            UI/UXdesign focuses on creating a seamless users experience...
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-gray-400 hover:-translate-y-1 duration-500">
          <GrGallery className="w-10 h-10 bg-pink-600 rounded-half p-2" />
          <h3 className="text-lg my-4 text-gray-700">Graphics design</h3>
          <p className="text-sm text-gray-600 leading-5">
            creative design solutions to enhances visual communition...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
