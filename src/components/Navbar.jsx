import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl text-yellow-500 font-bold cursor-pointer">
              MovieSite
            </h1>
          </div>

          {/* Search bar for large screens */}
          <div className="hidden md:flex items-center flex-1 justify-center relative">
            <input
              type="text"
              value={searchText}
              onChange={handleInputChange}
              placeholder="Search movies..."
              className="bg-gray-800 text-white rounded-md px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
              {searchText && (
                <button
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  <i className="ri-close-circle-line text-white text-lg"></i>
                </button>
              )}
              <button className="text-gray-400 hover:text-white focus:outline-none">
                <i className="ri-search-line text-white text-lg"></i>{" "}
                {/* Remix Search Icon */}
              </button>
            </div>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-medium"
            >
              Movies
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-medium"
            >
              Genres
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile search and hamburger menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Search icon for mobile */}
            <button
              onClick={toggleSearch}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Search</span>
              <i className="ri-search-line text-white text-lg"></i>{" "}
              {/* Remix Search Icon */}
            </button>

            {/* Hamburger menu */}
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 py-3 bg-gray-900 relative">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="Search movies..."
            className="bg-gray-800 text-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
            {searchText && (
              <button
                onClick={clearSearch}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <i className="ri-close-circle-line text-white text-lg"></i>{" "}
                {/* Close icon */}
              </button>
            )}
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <i className="ri-search-line text-white text-lg"></i>{" "}
              {/* Remix Search Icon */}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Movies
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Genres
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
