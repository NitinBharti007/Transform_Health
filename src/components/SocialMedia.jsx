import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialMediaShowcase = () => {
  return (
    <div className="min-h-screen bg-amber-50 p-8 lg:px-16 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1e3a5f] mb-4 leading-tight">
        Transforming Health in the Digital Age
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        Follow our journey as we advocate for health equity and digital
        innovation through engaging content on LinkedIn and Instagram.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-200 flex flex-col overflow-hidden transition hover:shadow-2xl">
          <div className="flex items-center gap-4 p-6 bg-blue-50 border-b border-blue-100">
            <FaLinkedin size={40} className="text-blue-700" />
            <div>
              <h2 className="text-xl font-bold text-blue-800">
                Transform Health
              </h2>
              <p className="text-gray-500 text-sm">
                10.7k followers • Health Equity Advocate
              </p>
            </div>
          </div>

          <div className="flex gap-3 px-6 py-4 bg-white border-b">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition">
              Follow
            </button>
            <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg text-sm transition">
              Visit Website
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-5 max-h-[400px] scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm"
              >
                <h3 className="font-semibold text-blue-800 mb-2">
                  📢 Digital Health for All
                </h3>
                <p className="text-gray-700 text-sm">
                  We're building a digitally-ready health system by:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                  <li>Empowering frontline workers</li>
                  <li>Investing in infrastructure</li>
                  <li>Designing for equity & inclusion</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl border border-pink-200 flex flex-col overflow-hidden transition hover:shadow-2xl">
          <div className="flex items-center gap-4 p-6 bg-pink-50 border-b border-pink-100">
            <FaInstagram size={40} className="text-pink-600" />
            <div>
              <h2 className="text-xl font-bold text-pink-600">
                @Trans4m_Health
              </h2>
              <p className="text-gray-500 text-sm">
                3.4k posts • 3k+ followers
              </p>
            </div>
          </div>

          <div className="flex gap-3 px-6 py-4 bg-white border-b">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm transition">
              Follow
            </button>
            <button className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-lg text-sm transition">
              View Profile
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-5 max-h-[400px] scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-pink-100">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-pink-50 p-4 rounded-xl border border-pink-100 shadow-sm"
              >
                <img
                  src="https://placehold.co/400x200"
                  alt="Instagram post"
                  className="rounded-xl mb-3 w-full object-cover"
                />
                <p className="text-gray-700 text-sm">
                  Highlighting our campaign on health equity & digital access.
                  🌍❤️
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  #HealthForAll #DigitalHealth #Equity
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaShowcase;
