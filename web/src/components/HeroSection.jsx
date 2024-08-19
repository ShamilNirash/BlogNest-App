import React from "react";
import { FaSearch } from "react-icons/fa";
import { images } from "../assets/assests";
export default function HeroSection() {
  const popularTags = ["Design", "User Experiences", "User Interfaces"];
  return (
    <section className="px-[3rem] md:px-[5rem] mt-8 lg:flex  w-full">
      <div className="xl:mt-[3rem] lg:mt-[4rem] 2xl:mt-[5rem] lg:w-[50%] xl:w-[45%]">
        <div className="text-center lg:text-left">
          <p className="text-[31px] md:text-[48px]  xl:text-[56px] font-bold text-dark-soft font-roboto ">
            Read the most <br></br>
            interesting articles
          </p>
          <p className="font-sans text-[16px] md:text-[20px] lg:text-[18px] xl:text-[20px] text-dark-light mt-4 lg:mt-2 xl:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="  mt-6 md:mt-8 lg:mt-4 xl:mt-8  md:flex md:justify-between justify-center md:bg-[#FFFFFF] w-full md:px-5 md:py-3 md:rounded-[8px]">
          <span className="flex items-center text-[#959EAD] text-[16px] lg:text-[15px] xl:text-[16px] rounded-[8px] bg-[#FFFFFF] w-full md:w-auto px-5 py-3 md:py-0">
            <FaSearch className="" />
            <input
              className="ml-3 font-bold font-sans italic outline-none w-[60%] md:w-auto"
              placeholder="Search article"
            ></input>
          </span>
          <button className="mt-6 w-full md:w-[20%] bg-primary px-8 md:px-4 py-3 md:py-2 md:mt-0 rounded-[8px] text-[#FFFFFF] font-bold lg:text-[14px] xl:text-[16px]">
            Search
          </button>
        </div>
        <div className="mt-7 lg:mt-4 text-[14px] lg:text-[13px] xl:text-[14px] font-sans font-bold italic md:flex flex-nowrap">
          <span className="text-dark-light md:text-[16px] lg:text-[14px] xl:text-[16px] md:py-1 md:mt-2 md:mr-6 inline-block">
            Popular Tags :
          </span>
          <div className="mt-2 md:mt-0">
            {popularTags.map((item) => (
              <span
                className="text-primary  bg-[#daf4fe] px-2 py-1 mr-2 mt-2 inline-block rounded-[4px] "
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <img
        src={images.LiveChat}
        alt="Live chat"
        className="lg:w-[50%] xl:w-[55%] lg:h-[83vh] hidden lg:block "
      />
    </section>
  );
}
