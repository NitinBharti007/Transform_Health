import React from "react";
import hands from "../assets/hands.png";
import icon from "../assets/Icon-8.png";
import icon2 from "../assets/Icon-13.png";

const CommunityAction = () => {
  return (
    <div className="p-4 lg:p-8 bg-amber-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2c4a6b] mb-10 w-full max-w-full">
        GLOBAL COMMUNITY LOCAL ACTION
      </h1>
      <div className="space-y-12 px-4 md:px-16 lg:px-40">
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 transition-transform duration-500 transform hover:scale-105">
          <img
            src={hands}
            alt="Illustration of multi-colored hands raised"
            className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0 transition-all duration-500 transform hover:scale-110"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black transition-colors duration-300 hover:text-orange-600">
              Multi-sectoral collaboration
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              200+ organisations from different sectors form the coalition,
              comprising civil society, academia, professional bodies, the
              private sector and grassroots organisations.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 transition-transform duration-500 transform hover:scale-105">
          <img
            src={icon}
            alt="Illustration of two people shaking hands"
            className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0 transition-all duration-500 transform hover:scale-110"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black transition-colors duration-300 hover:text-orange-600">
              Six national coalitions
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              In{" "}
              <span className="text-orange-600 font-semibold">
                Kenya, Indonesia, Ecuador, Senegal, India & Mexico
              </span>{" "}
              to enable the digital transformation of health nationally.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 transition-transform duration-500 transform hover:scale-105">
          <img
            src={icon2}
            alt="Illustration of a group of people"
            className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0 transition-all duration-500 transform hover:scale-110"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black transition-colors duration-300 hover:text-orange-600">
              Influencing regional agendas
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              In Africa, Asia, and Latin America in partnership with regional
              networks.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-orange-600 font-bold text-lg transition-colors duration-300 hover:text-blue-600"
          >
            SEE OUR PARTNERS &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunityAction;
