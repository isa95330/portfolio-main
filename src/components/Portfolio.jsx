import React from "react";
import depanbtp from "../portfolio/depanbtp.png"
import hexashop from "../portfolio/hexashop.png";

import portfolioimg from "../portfolio/porfolioimg.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: depanbtp,
      urldemo:"https://depanbtp.netlify.app/",
      urlcode:"https://github.com/isa95330/depanbtp-new",
    },
    {
      id: 2,
      src: portfolioimg,
      urlcode:"https://isabellemaze-portfolio.netlify.app",
      urlcode:"https://github.com/isa95330/portfolio.git",
    

    },
    {
      id: 3,
      src: hexashop,
      urldemo:"https://hexashopbyisa.netlify.app",
      urlcode:"https://github.com/isa95330/hexashop.git",
    },

  ];

  return (
    <div
      name="portfolio"
      id="idportfolio"
      className=" w-full text-white md:h-screen mt-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, urldemo, urlcode}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={urldemo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={urlcode}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;