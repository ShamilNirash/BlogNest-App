import React, { Fragment } from "react";
import { images } from "../assets/assests";
import { FaCheck } from "react-icons/fa6";

export default function ArticleCard({ cardItem }) {
  return (
    <div className="rounded-[12px] shadow-xl w-[280px] h-[380px] sm:w-[260px] md:w-[300px] md:h-[460px] lg:w-[360px] lg:h-[500px] mb-[3rem] sm:mr-3">
      <img
        className="w-[100%] h-[160px] md:h-[200px] lg:h-[250px]"
        src={images.Blog1}
        alt="Blog post"
      />
      <div className="px-3 py-5 lg:px-6 flex flex-col justify-between h-[220px] md:h-[260px]">
        <h1 className="text-dark-soft text-[20px] md:text-[24px] lg:text-[28px] font-bold font-roboto">
          Why Use External It Support
        </h1>
        <p className="text-dark-light text-[14px] md:text-[18px] font-sans">
          Thanks to never-ending piles of data & the amount.
        </p>
        <div className="flex justify-between">
          <div className="flex ">
            <img
              className="w-8 h-8 md:h-9 md:w-9 self-center"
              src={images.Blog1Person}
              alt="person"
            />
            <div className="ml-2">
              <span className="text-dark-soft text-[14px] md:text-[16px] font-bold font-sans italic">
                Eugene Rodriquez
              </span>
              <span className="flex items-center ">
                <div className="flex h-[14px] md:h-[16px]  w-[14px] md:w-[16px]  rounded-[50%] bg-[#caf8e5] justify-center items-center mr-2">
                  <FaCheck className="text-[8px]  md:text-[10px]  text-[#36B37E]" />
                </div>
                <span className="text-[12px]  md:text-[14px] font-sans italic text-dark-light ">
                  Verified writer
                </span>
              </span>
            </div>
          </div>
          <div className="text-dark-light text-[14px] md:text-[16px] italic font-bold font-sans self-center">
            02 May
          </div>
        </div>
      </div>
    </div>
  );
}
