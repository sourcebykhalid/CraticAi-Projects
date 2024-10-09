import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for Hamburger and Close

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 z-20 transition-colors duration-300 text-neutral-950 ${
        isScrolled ? "bg-neutral-200 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-2xl font-sans font-bold ${
            isScrolled ? "text-black" : "text-orange-600"
          }`}
        >
          CraticAi
        </h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes
              className={`text-2xl ${
                isScrolled ? "text-black" : "text-neutral-300"
              }`}
            />
          ) : (
            <FaBars
              className={`text-2xl ${
                isScrolled ? "text-black" : "text-neutral-300"
              }`}
            />
          )}
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-1 md:space-x-4">
          <li>
            <Link
              to="/"
              smooth={true}
              duration={500}
              className={`${
                isScrolled ? "text-black" : "text-neutral-300"
              } cursor-pointer hover:text-orange-500 transition-all`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`${
                isScrolled ? "text-black" : "text-neutral-300"
              } cursor-pointer hover:text-orange-500 transition-all`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className={`${
                isScrolled ? "text-black" : "text-neutral-300"
              } cursor-pointer hover:text-orange-500 transition-all`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="careers"
              smooth={true}
              duration={500}
              className={`${
                isScrolled ? "text-black" : "text-neutral-300"
              } cursor-pointer hover:text-orange-500 transition-all`}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`${
                isScrolled ? "text-black" : "text-neutral-300"
              } cursor-pointer hover:text-orange-500 transition-all`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Menu */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col absolute top-16 left-0 w-full bg-neutral-200 md:hidden text-center py-6 space-y-4 z-10 shadow-lg`}
        >
          <li>
            <Link
              to="/"
              smooth={true}
              duration={500}
              onClick={toggleMenu} // Close menu after click
              className="text-black cursor-pointer hover:text-orange-500 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="text-black cursor-pointer hover:text-orange-500 transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="text-black cursor-pointer hover:text-orange-500 transition-all"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="careers"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="text-black cursor-pointer hover:text-orange-500 transition-all"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="text-black cursor-pointer hover:text-orange-500 transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
