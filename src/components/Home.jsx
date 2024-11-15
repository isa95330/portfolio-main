import React from "react";
import isaphoto from "../assets/isa.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div 
      name="Accueil"
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div id="home" className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Développeuse Python 
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Développeuse Back-End Python passionnée par les défis techniques.
          Curieuse et toujours souriante, j’aime apprendre et me perfectionner en continu.
          Entre veille technologique, formations et katas, je cherche toujours à affiner mes
          compétences et à explorer de nouvelles solutions innovantes
          </p>
          <div>
            <Link
              to="portfolio-section"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={isaphoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
