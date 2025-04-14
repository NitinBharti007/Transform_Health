import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2c4a6b] text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-3">Transform Health</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            We are on a mission to revolutionize healthcare through technology.
            From innovative campaigns to impactful events, we bridge the gap
            between digital solutions and human wellness.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-orange-400 transition">
                Latest News
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-orange-400 transition">
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-orange-400" />
              <span>123 Health Avenue, Sector 62, Noida, UP - 201309</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              <a
                href="tel:+916394358223"
                className="hover:text-orange-400 transition"
              >
                +91 63943 58223
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              <a
                href="mailto:contact@transformhealth.org"
                className="hover:text-orange-400 transition"
              >
                contact@transformhealth.org
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <p className="text-sm mb-3 text-gray-200">
            Stay connected on social media:
          </p>
          <div className="flex space-x-4 text-2xl">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-orange-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-300">
        © {currentYear} Transform Health. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
