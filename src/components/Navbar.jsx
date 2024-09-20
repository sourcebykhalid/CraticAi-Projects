import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 z-20 transition-colors duration-300 ${
        isScrolled ? "bg-neutral-200 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold ${
            isScrolled ? "text-black" : "text-orange-600"
          }`}
        >
          CraticAi
        </h1>
        <ul className="flex space-x-4">
          <li
            className={`${
              isScrolled ? "text-black" : "text-neutral-200"
            } cursor-pointer hover:text-orange-500 transition-all`}
          >
            Home
          </li>
          <li
            className={`${
              isScrolled ? "text-black" : "text-neutral-200"
            } cursor-pointer hover:text-orange-500 transition-all`}
          >
            About
          </li>
          <li
            className={`${
              isScrolled ? "text-black" : "text-neutral-200"
            } cursor-pointer hover:text-orange-500 transition-all`}
          >
            Services
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
