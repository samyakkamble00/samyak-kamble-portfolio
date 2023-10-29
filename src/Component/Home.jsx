import React from "react";
import samImg from "../assets/Samyak_Kamble_.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-fit p-12 w-full bg-gradient-to-b from-black via-black to-gray-800 pb-16"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:mt-0 mt-12">
          <h2 className="text-4xl sm:text-7xl font-bold mt-17">
            I'm a FrontEnd Developer
          </h2>
          <p className="text-gray-500 py-5 max-w-md">
            Hello, I'm Samyak Kamble, a 23-year-old. I'm currently on the
            lookout for Front-End Developer roles. My knowledge equips me with
            problem-solving skills and a solid foundation for web development.
            I'm passionate about creating engaging, user-friendly web interfaces
            and stay updated on the latest industry trends. My goal is to excel
            in Front-End Development and contribute to meaningful projects.
          </p>
          <div className=" md:flex md:gap-10">
            <a
              href="/path/to/your/Samyak_Kamble-7057669342.pdf" // Update this path
              download
              target="_blank"
              rel="noreferrer"
            >
              <button className="group w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer">
                Resume
                <span className="group-hover:rotate-90 duration-300 text-lg">
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </a>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 text-lg">
                <MdKeyboardArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={samImg}
            alt="Samyak Kamble Image"
            className="rounded-2xl mx-auto w-2/3 md:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
