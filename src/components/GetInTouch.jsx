import React from "react";
import man from "../assets/contact.svg";

const GetInTouch = () => {
  return (
    <section className="bg-[#fefef0] font-['Roboto'] px-4 py-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={man}
            alt="Illustration of a person holding a phone"
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-800 mb-6">
            Drop us a line to know more about the coalition or get involved in
            our activities!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-md bg-yellow-300 placeholder-gray-800 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-md bg-yellow-300 placeholder-gray-800 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-yellow-300 placeholder-gray-800 focus:outline-none"
            />
          </form>
          <button className="mt-6 text-pink-600 font-bold text-lg flex items-center hover:underline transition-all">
            COMPLETE THE FORM <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
