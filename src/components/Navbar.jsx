import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/main_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-amber-50" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <img
              src={logo}
              alt="Transform Health"
              className="h-10 lg:h-15 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-4 ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <NavLink to="/" active={isActive("/")}>
              HOME
            </NavLink>
            <NavLink to="/about" active={isActive("/about")}>
              ABOUT
            </NavLink>
            <NavLink to="/our-work" active={isActive("/our-work")}>
              OUR WORK
            </NavLink>
            <NavLink to="/partners" active={isActive("/partners")}>
              PARTNERS
            </NavLink>
            <NavLink to="/insights" active={isActive("/insights")}>
              INSIGHTS
            </NavLink>
            <NavLink
              to="/national-coalitions"
              active={isActive("/national-coalitions")}
            >
              NATIONAL COALITIONS
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          <MobileNavLink to="/" active={isActive("/")}>
            HOME
          </MobileNavLink>
          <MobileNavLink to="/about" active={isActive("/about")}>
            ABOUT
          </MobileNavLink>
          <MobileNavLink to="/our-work" active={isActive("/our-work")}>
            OUR WORK
          </MobileNavLink>
          <MobileNavLink to="/partners" active={isActive("/partners")}>
            PARTNERS
          </MobileNavLink>
          <MobileNavLink to="/insights" active={isActive("/insights")}>
            INSIGHTS
          </MobileNavLink>
          <MobileNavLink
            to="/national-coalitions"
            active={isActive("/national-coalitions")}
          >
            NATIONAL COALITIONS
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

// Desktop NavLink component
const NavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`px-4 py-2 text-md font-medium tracking-wide transition-all duration-200 relative group ${
      active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-200 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`text-xl font-medium transition-colors duration-200 ${
      active ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
