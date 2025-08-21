"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center h-auto w-auto">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            ሐበሻ Bytes
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="/#services" className="cursor-pointer">
              Services
            </a>
            <a href="#team" className="cursor-pointer">
              Team
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[65px] left-0 w-full bg-white flex flex-col items-center py-5 gap-4 z-40">
          <a
            href="#about-me"
            className="text-gray-800 border border-gray-300 rounded-full px-5 py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-800 border border-gray-300 rounded-full px-5 py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            Skills
          </a>
          <a
            href="/#services"
            className="text-gray-800 border border-gray-300 rounded-full px-5 py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            Services
          </a>
          <a
            href="#team"
            className="text-gray-800 border border-gray-300 rounded-full px-5 py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            Team
          </a>
          <a
            href="#projects"
            className="text-white-800 border border-gray-300 rounded-full px-5 py-2 cursor-pointer hover:bg-gray-100 transition bg-black"
          >
            Projects
          </a>

          {/* Socials */}
          <div className="flex flex-row gap-5 mt-2">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
