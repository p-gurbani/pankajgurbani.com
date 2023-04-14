import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkModeToggler from "./DarkModeToggler";
import { AboutMe } from "../assets/images/cdn";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.getElementById("mobile-menu").style = "max-height: 100vh;";
    } else {
      document.getElementById("mobile-menu").style = "max-height: 0px;";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="max-w">
        <div className="flex items-center justify-between h-16">
          <div>
            <NavLink className="flex gap-2 items-center" to="/">
              <img
                src={AboutMe.ProfileLogo}
                alt="Rivo logo"
                className="w-8 rounded-lg"
              />
              <h1 className="text-body dark:text-night-body font-bold text-lg">
                Pankaj Gurbani
              </h1>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-end">
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
              <NavLink to="/case-studies" className="navlink">
                Case Studies
              </NavLink>
              <NavLink to="/about" className="navlink">
                My Story
              </NavLink>
              <NavLink to="/contact" className="navlink">
                Contact
              </NavLink>
              <span className="ml-8">
                <DarkModeToggler />
              </span>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-6">
            <DarkModeToggler />

            <button
              type="button"
              className="items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100 dark:focus:ring-gray-800"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b-2 border-gray-100 dark:border-gray-800">
          <NavLink to="/" className="navlink-mobile" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink
            to="/case-studies"
            className="navlink-mobile"
            onClick={toggleMenu}
          >
            Case Studies
          </NavLink>
          <NavLink to="/about" className="navlink-mobile" onClick={toggleMenu}>
            My Story
          </NavLink>
          <NavLink
            to="/contact"
            className="navlink-mobile"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
