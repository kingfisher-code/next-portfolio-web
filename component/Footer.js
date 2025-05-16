import React from "react";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3>JOHN CODEZ.</h3>
        <div className="flex w-max items-center gap-2 mx-auto">
          <IoIosMail className="w-6 h-6" />
          johnnwobodo.me@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 john nwobodo. All right reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
