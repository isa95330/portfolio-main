import React from "react";
import depanbtp from "../portfolio/depanbtp.png";
import hexashop from "../portfolio/hexashop.png";
import portfolioimg from "../portfolio/portfolio.png";

const Portfolio = () => {
  return (
    <div id="portfolio-section" className="w-full text-white mt-10">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Mes différents projets</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={depanbtp}
              alt="Dépannage BTP"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Dépannage BTP</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => window.open("https://depanbtp.netlify.app/", "_blank")}
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() => window.open("https://github.com/isa95330/depanbtp-new", "_blank")}
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={portfolioimg}
              alt="Mon Portfolio"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Mon Portfolio</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => window.open("https://isabellemaze-portfolio.netlify.app", "_blank")}
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() => window.open("https://github.com/isa95330/portfolio.git", "_blank")}
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={hexashop}
              alt="Hexashop"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Hexashop</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => window.open("https://hexashopbyisa.netlify.app", "_blank")}
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() => window.open("https://github.com/isa95330/hexashop.git", "_blank")}
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
