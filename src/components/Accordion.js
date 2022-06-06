import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const Accordion = ({ title, content, bg, icon, links }) => {
  const accordionItem = useRef();
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current !== event.target) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div
        ref={accordionItem}
        onClick={() => setIsActive(!isActive)}
        className={`${
          isActive
            ? "w-[300px] h-[300px] md:w-[400px] md:h-[400px] cursor-auto"
            : "h-[100px] w-[300px] md:h-[400px] md:w-[100px] lg:w-[190px]"
        }
            relative grid place-content-center rounded-lg shadow-lg transition-all duration-500 ease-in-out cursor-pointer hover:md:scale-110 hover:lg:scale-105 hover:z-10 overflow-hidden bg-gradient-to-b ${bg}`}
      >
        <div
          className={`h-full w-[320px] grid 
        place-content-center px-9 md:px-3`}
        >
          <h1
            className={`${
              isActive ? "md:rotate-0 text-xl" : "md:-rotate-90 text-xl"
            } transition-all duration-500 ease-in-out text-white `}
          >
            {title}
          </h1>

          <AnimatePresence>
            {isActive && (
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${
                  isActive ? " opacity-100 " : " opacity-0 hidden"
                } transition-all duration-75 ease-in-out  text-white text-sm md:text-md font-light`}
              >
                {content}
                <div className="flex flex-col w-full mt-5 place-items-center gap-2">
                  <button className="w-1/3 hover:scale-110 hover:text-gray-500 ">
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </button>
                  <button className="w-1/3 hover:scale-110 hover:text-gray-500">
                    <a
                      href={links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </div>
              </motion.h2>
            )}
          </AnimatePresence>
          <span
            className="absolute right-[15px] md:right-[33px]
          bottom-[10px] text-white"
          >
            {icon}
          </span>
        </div>
      </div>
    </>
  );
};
