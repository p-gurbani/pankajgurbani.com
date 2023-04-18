import { ReactComponent as InstagramIcon } from "../assets/svg/instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../assets/svg/linkedin.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card-bg dark:bg-night-card-bg py-6 z-20 xl:z-0 flex flex-col gap-8">
      <div className="flex gap-x-8 flex-wrap container max-w justify-center">
        <NavLink to="/" className="navlink-footer">
          Home
        </NavLink>
        <NavLink to="/case-studies" className="navlink-footer">
          Case Studies
        </NavLink>
        <NavLink to="/about" className="navlink-footer">
          My Story
        </NavLink>
        <NavLink to="/contact" className="navlink-footer">
          Contact
        </NavLink>
      </div>
      <div className="container flex flex-col-reverse gap-8 md:flex-row max-w justify-between items-center">
        <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
          Copyright 2023, Pankaj Gurbani. All rights reserved.
        </p>
        <div className="flex space-x-6 md:space-x-4">
          <a
            href="https://www.instagram.com/pankajgurbanii/"
            target="_blank"
            rel="noreferrer"
            className="w-7 social-icon-link"
          >
            <InstagramIcon className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/gurbanipankaj/"
            target="_blank"
            rel="noreferrer"
            className="w-7 social-icon-link"
          >
            <LinkedInIcon className="social-icon" />
          </a>
          <a
            href="https://twitter.com/pankajgurbani_"
            target="_blank"
            rel="noreferrer"
            className="w-7 social-icon-link"
          >
            <TwitterIcon className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
