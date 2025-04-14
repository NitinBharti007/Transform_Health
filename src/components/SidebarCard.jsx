import React from "react";
import svgBackground from "../assets/svgexport-14.svg";
import { FaArrowRight } from "react-icons/fa";

const SvgInfoSection = () => {
  return (
    <section className="relative w-full min-h-[400px] lg:min-h-[500px] bg-pink-100 overflow-hidden font-['Roboto'] p-6 md:p-20">
      <img
        src={svgBackground}
        alt="Decorative"
        className="hidden lg:block absolute inset-0 w-[90vw] ml-12 h-full z-0"
      />
      <div className="relative z-10 max-w-3xl mt-8 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <ul className="w-full md:w-fit lg:space-y-0 md:space-y-3 text-base sm:text-lg font-medium mt-4 md:mt-14 text-gray-800 md:text-black lg:text-white">
          <li>Privacy Policy</li>
          <li>Media Enquiries</li>
          <li>Get Involved</li>
          <li>Opportunities</li>
          <li>Equity & Inclusion Dashboard</li>
        </ul>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <p className="text-gray-800 md:text-black lg:text-white text-lg sm:text-xl font-semibold mb-3">
            Subscribe to our Newsletter
          </p>

          <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm sm:text-base rounded-full sm:rounded-l-full sm:rounded-r-none bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="flex items-center justify-center bg-pink-600 text-white px-4 sm:px-5 py-3 text-sm sm:text-base rounded-full sm:rounded-r-full sm:rounded-l-none hover:bg-pink-700 transition duration-200">
              <FaArrowRight className="text-base sm:text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SvgInfoSection;
