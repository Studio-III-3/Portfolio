import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import {
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

          <div className="h-auto flex flex-col items-center sm:items-start justify-start">
            <div className="font-bold text-[16px] mb-4">Community</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <FaYoutube className="text-lg" />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <RxGithubLogo className="text-lg" />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <RxDiscordLogo className="text-lg" />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>

          <div className="h-auto flex flex-col items-center sm:items-start justify-start">
            <div className="font-bold text-[16px] mb-4">Social Media</div>
            <div className="grid grid-cols-2 gap-x-4 w-full max-w-xs">
              <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                <RxInstagramLogo className="text-lg" />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
              <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                <RxTwitterLogo className="text-lg" />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
              <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                <RxLinkedinLogo className="text-lg" />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
              <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                <FaTiktok className="text-lg" />
                <span className="text-[15px] ml-[6px]">TikTok</span>
              </p>
              <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                <FaFacebook className="text-lg" />
                <span className="text-[15px] ml-[6px]">Facebook</span>
              </p>
              <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
                <FaTelegramPlane className="text-lg" />
                <span className="text-[15px] ml-[6px]">Telegram</span>
              </p>
            </div>
          </div>

          <div className="h-auto flex flex-col items-center sm:items-start justify-start">
            <div className="font-bold text-[16px] mb-4">About</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <span className="text-[15px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <span className="text-[15px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors">
              <span className="text-[15px]">mifwebchain@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mt-10 mb-[20px] text-[15px] text-center">
          &copy; WebChain Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
