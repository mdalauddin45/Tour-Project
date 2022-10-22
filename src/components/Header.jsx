import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.jpeg";
import "./Header/Header.css";

const Header = () => {
  return (
    <header className="p-4 text-gray-900">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Link to="/">
            <img src={logoImg} alt="" className="w-20" />
          </Link>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto dark:text-gray-100"
          />

          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/news"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                News
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/destination"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
              >
                Destination
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Blog
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/contact"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8 py-3 font-semibold rounded bg-yellow-500 text-gray-900">
            Log in
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
