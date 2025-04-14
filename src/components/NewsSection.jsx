import React from "react";
import handimg from "../assets/Group-8399.png";
import first from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";
import fourth from "../assets/4.png";

const NewsEventCard = ({ image, title, description, linkText, link }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        )}
        <a href={link} className="text-[#2c4a6b] font-bold mt-2 inline-block">
          {linkText}
        </a>
      </div>
    </div>
  );
};

const NewsEvents = () => {
  return (
    <div className="px-4 lg:px-8 bg-amber-50">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 lg:p-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#2c4a6b]">
          NEWS & EVENTS
        </h1>
        <img
          src={handimg}
          alt="Hand"
          className="hidden lg:block max-w-[150px]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2c4a6b] mb-4">
            Commentaries & Opinions
          </h2>
          <div className="space-y-6">
            <NewsEventCard
              image={first}
              title="A call for bold government..."
              description="Digital Health Week is a global week of action that brings together organisations..."
              linkText="Learn more"
              link="#"
            />
            <NewsEventCard
              image={second}
              title="Digital health powering Kenya’s..."
              description="Digital Health Week is a global week of action that brings together organisations..."
              linkText="Learn more"
              link="#"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2c4a6b] mb-4">
            Campaigns
          </h2>
          <div className="space-y-6">
            <NewsEventCard
              image={third}
              title="Digital Health Week"
              description="Digital Health Week is a global week of action that brings together organisations..."
              linkText="Learn more"
              link="#"
            />
            <NewsEventCard
              image={fourth}
              title="My Data Our Health"
              description="Join us to ensure information about our health, collected by others, is safe, secure..."
              linkText="Learn more"
              link="#"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch min-h-[500px] gap-6 p-4 lg:p-8">
        <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 w-full md:w-1/2 shadow-lg flex flex-col">
          <h2 className="text-white text-3xl font-extrabold mb-4 flex items-center gap-2">
            <i className="fas fa-newspaper text-white"></i> In the News
          </h2>
          <div className="overflow-y-auto h-[420px] pr-2 space-y-4 custom-scrollbar">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow hover:shadow-md transition duration-300 flex flex-col sm:flex-row gap-4"
              >
                <img
                  src={`https://placehold.co/300x180?text=News+${index + 1}`}
                  alt={`News ${index + 1}`}
                  className="w-full sm:w-40 h-36 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2c4a6b]">
                    News Headline {index + 1}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Short description for the news item {index + 1}...
                  </p>
                  <a
                    href="#"
                    className="text-orange-500 font-semibold mt-2 inline-block hover:underline"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 w-full md:w-1/2 shadow-lg flex flex-col justify-between">
          <h2 className="text-white text-3xl font-extrabold mb-4 flex items-center gap-2">
            <i className="fas fa-calendar-alt text-white"></i> Events
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Look out for upcoming{" "}
            <span className="font-bold underline">Transform Health</span> events
            — engaging sessions, insightful talks, and collaborative workshops
            to shape the future of digital health.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-2 bg-white text-orange-500 font-bold rounded-full shadow hover:bg-orange-100 transition"
            >
              View Event Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
