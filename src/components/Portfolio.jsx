import React from "react";
import depanbtp from "../portfolio/depanbtp.png";
import portfolioimg from "../portfolio/portfolio.png";
import ecomerce from "../portfolio/ecom.png";
import servicedepannage from "../portfolio/service-dépannage.png";
import python from "../portfolio/entrainement-python.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full text-white mt-10">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Mes différents projets</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          
          {/* Dépannage BTP Project */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={depanbtp}
              alt="Dépannage BTP"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Dépannage BTP</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() =>
                  window.open("https://depanbtp.netlify.app/", "_blank")
                }
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/isa95330/depanbtp-new",
                    "_blank"
                  )
                }
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>

          {/* Mon Portfolio Project */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={portfolioimg}
              alt="Mon Portfolio"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Mon Portfolio</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() =>
                  window.open("https://isabellemaze.netlify.app/", "_blank")
                }
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/isa95330/portfolio.git",
                    "_blank"
                  )
                }
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>

          {/* Hair Ecommerce Project */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={ecomerce}
              alt="Hair Ecommerce"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Hair Ecommerce (Django)</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() =>
                  window.open("https://ecommerce-51dw.onrender.com/", "_blank")
                }
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/isa95330/ecommerce.git",
                    "_blank"
                  )
                }
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>

          {/* Hair Project (FastAPI & ReactJS) */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={ecomerce}
              alt="Hair (FastAPI & ReactJS)"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Hair (FastAPI & ReactJS)</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() =>
                  window.open("https://github.com/isa95330/Hair.git", "_blank")
                }
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/isa95330/Hair.git",
                    "_blank"
                  )
                }
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>

          {/* Service de Dépannage Project */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={servicedepannage}
              alt="Service de Dépannage"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Service de Dépannage</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() =>
                  window.open("https://servicesurgencedepannage.com/", "_blank")
                }
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/isa95330/service-urgence-depan.git",
                    "_blank"
                  )
                }
                className="portfolio-button"
              >
                Code
              </button>
            </div>
          </div>

          {/* Entraînement Python Project */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={python}
              alt="Entraînement Python"
              className="portfolio-img rounded-md duration-200 hover:scale-105"
            />
            <p className="text-lg font-semibold mt-2">Entraînement Python</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() =>
                  window.open("https://github.com/isa95330/python-training", "_blank")
                }
                className="portfolio-button"
              >
                Demo
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/isa95330/python-training",
                    "_blank"
                  )
                }
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
