import React, { useState } from "react";

const VideoCard = ({ videoId, title, learnMoreLink }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
      <iframe
        className="w-full h-56 sm:h-64 md:h-52 lg:h-48"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={title}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>
        <a
          href={learnMoreLink}
          className="text-blue-700 hover:text-blue-900 text-sm sm:text-base font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

const VideosAndMultimedia = () => {
  const videoData = [
    {
      videoId: "0jwT0F323jw",
      title: "How digital health helps advance #UHC goals",
      learnMoreLink: "https://youtu.be/0jwT0F323jw",
    },
    {
      videoId: "XtaPfVrxSpA",
      title: "#MyDataOurHealth | Good Health Data Governance Matters!",
      learnMoreLink: "https://youtu.be/XtaPfVrxSpA",
    },
    {
      videoId: "0muhzsqN3H8",
      title:
        "Towards a Global Health Data Governance Framework – Transform Health at #WHA76",
      learnMoreLink: "https://youtu.be/0muhzsqN3H8",
    },
  ];

  return (
    <section className="p-8 lg:px-16 bg-amber-50">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl sm:text-5xl text-center font-bold text-[#2c4a6b]">
          Videos and Multimedia
        </h1>
        <a
          href="#"
          className="text-orange-600 font-bold text-base sm:text-lg flex items-center hover:text-orange-700"
        >
          VIEW ALL MULTIMEDIA
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {videoData.map((video, index) => (
          <VideoCard
            key={index}
            videoId={video.videoId}
            title={video.title}
            learnMoreLink={video.learnMoreLink}
          />
        ))}
      </div>
    </section>
  );
};

export default VideosAndMultimedia;
