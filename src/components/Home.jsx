import React from "react";
import isaphoto from "../assets/IsaPhoto.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Développeuse web
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            En formation depuis Septembre 2022 , je suis à la recherche d'un stage de 2 à 6 mois à partir du 18 Septembre 2023 et d'une alternance afin de compléter mes connaissances en React JS et Symfony.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
           id="idbutton">
            
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
        <h2 className="text-4xl sm:text-7xl font-bold text-white" id="none1">
            Développeuse web
          </h2>
          <p className="text-gray-500 py-4 max-w-md"id="none2">
            En formation depuis Septembre 2022 , je suis à la recherche d'un stage de 2 à 6 mois à partir du 18 Septembre 2023 et d'une alternance afin de compléter mes connaissances en React JS et Symfony.
          </p>
      </div>
    </div>
  );
};

export default Home;