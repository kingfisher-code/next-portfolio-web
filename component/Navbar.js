"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <div>
          <h3>JOHN CODEZ.</h3>
        </div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a className="font-Inter, sans-serif" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Inter, sans-serif" href="#service">
              Service
            </a>
          </li>
          <li>
            <a className="font-Inter, sans-serif" href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-family: Inter, sans-serif" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <FaMoon className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <FaArrowCircleUp className="w-18" />
          </a>
          <div>
            <button className="block md:hidden ml-3" onClick={openMenu}>
              <CiMenuFries className="w-6" />
            </button>
          </div>
          {/* mobile menu */}

          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 buttom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
          >
            <div className="absolute right-6 top-6" onClick={closeMenu}>
              <IoMdClose className="w-5 cursor:pointer" />
            </div>
            <li>
              <a href="#top" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a
                className="font-Inter, sans-serif"
                href="#about"
                onClick={closeMenu}
              >
                About me
              </a>
            </li>
            <li>
              <a
                className="font-Inter, sans-serif"
                href="#service"
                onClick={closeMenu}
              >
                Service
              </a>
            </li>
            <li>
              <a
                className="font-Inter, sans-serif"
                href="#work"
                onClick={closeMenu}
              >
                My work
              </a>
            </li>
            <li>
              <a
                className="font-family: Inter, sans-serif"
                href="#contact"
                onClick={closeMenu}
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
