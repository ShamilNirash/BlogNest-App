import React, { useState } from "react";
import { images } from "../assets/assests";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const navbarItems = [
    { name: "Home", type: "link", url: "/" },
    { name: "Articles", type: "link", url: "/" },
    {
      name: "Pages",
      type: "dropdown",
      items: [
        { subName: "About Us", subUrl: "/" },
        { subName: "Contact Us", subUrl: "/" },
      ],
    },
    { name: "Pricing", type: "link", url: "" },
    { name: "Faq", type: "link", url: "" },
  ];
  const [navVisible, setNavVisible] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const navVisibleHandler = () => {
    setNavVisible(!navVisible);
  };
  const PagesDropdownHandler = () => {
    setPagesDropdown(!pagesDropdown);
  };
  return (
    <section>
      <header
        className={`${
          !navVisible ? "bg-transparent" : "bg-dark-hard h-[100vh] items-start "
        }  w-full lg:h-[80px] `}
      >
        <div
          className={`${
            !navVisible ? "bg-transparent" : "bg-[#F9FCFF]"
          } h-[80px]  w-[100%] px-[3rem] md:px-[5rem] flex justify-between lg:items-center`}
        >
          <div className="h-[80px] items-center">
            <img
              src={images.BlogNest}
              alt="BlogNest logo"
              className="w-[90px] md:w-[100px] h-[70px] md:h-[80px] mt-2"
            />
          </div>
          <div
            className={`${
              !navVisible ? "hidden" : "block"
            }    lg:w-[79%] xl:w-[60%] font-sans font-semibold lg:block text-[14px] md:text-[16px] `}
          >
            <ul className="w-full flex flex-col mt-[7rem] lg:mt-0 lg:flex-row h-[80px] justify-between items-center text-white lg:text-black ">
              {navbarItems.map((item) =>
                item.type === "link" ? (
                  <li className="text-center lg:pt-[28px] pb-[1rem] lg:pr-[3rem] h-[80px] lg:h-[80px] w-[6.4rem] lg:w-auto mt-5 lg:mt-0 " key={item}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ) : (
                  <li className="text-center lg:pt-[28px] pb-[1rem] lg:pr-[3rem]  lg:h-[80px] w-[6.4rem] lg:w-[8.5rem] mt-5 lg:mt-0" key={item}>
                    <div className="flex justify-center">
                      {item.name}
                      <RiArrowDropDownLine
                        className="ml-1 self-center"
                        onClick={PagesDropdownHandler}
                      />
                    </div>
                    <ul
                      className={`${
                        pagesDropdown ? "block" : "hidden"
                      } flex flex-col text-[12px] md:text-[14px] mt-1 transition-all shadow`}
                    >
                      {item.items.map((option) => (
                        <a key={option}
                          className="px-1 py-1 lg:hover:bg-black lg:hover:text-white transition-all"
                          href={option.subUrl}
                        
                        >
                          {option.subName}
                        </a>
                      ))}
                    </ul>
                  </li>
                )
              )}
              <button className="mt-[1rem] lg:mt-[0rem] 2xl:ml-[4rem] text-[#1565D8] px-[2rem] py-[0.3rem]  border-[#1565D8] border-[2px] rounded-[15px] hover:bg-[#1565D8] hover:text-white transition-all duration-300">
                Sign in
              </button>
            </ul>
          </div>
          <div className="lg:hidden h-[80px] flex items-center">
            {!navVisible ? (
              <AiOutlineMenu
                className="text-[26px] md:text-[30px]"
                onClick={navVisibleHandler}
              />
            ) : (
              <IoCloseSharp
                className="text-[26px] md:text-[30px]"
                onClick={navVisibleHandler}
              />
            )}
          </div>
        </div>
      </header>
    </section>
  );
}
