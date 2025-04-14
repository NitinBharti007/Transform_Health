import React from "react";

const NewsLetter = () => {
  return (
    <section className="px-6 py-10 bg-orange-400 text-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <h2 className="text-lg sm:text-xl font-semibold uppercase">
          Subscribe to Transform Health’s Newsletter:{" "}
          <span className="italic">The Digest</span>
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold text-sm sm:text-base px-4 py-2 rounded-full transition hover:bg-orange-100"
        >
          Subscribe Now
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default NewsLetter;
