import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 p-5">
      {/* Ensure that this div is a flex container */}
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-gray-800 font-extrabold text-2xl">
          {/* <a href="#">MyLogo</a> */}
        </div>

        {/* Navigation */}
        <nav className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">About</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Services</a>
          <a href="#" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</a>
        </nav>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <a href="#" className="block text-gray-800 px-4 py-2 text-lg hover:bg-gray-200 transition duration-300">Home</a>
        <a href="#" className="block text-gray-800 px-4 py-2 text-lg hover:bg-gray-200 transition duration-300">About</a>
        <a href="#" className="block text-gray-800 px-4 py-2 text-lg hover:bg-gray-200 transition duration-300">Services</a>
        <a href="#" className="block text-gray-800 px-4 py-2 text-lg hover:bg-gray-200 transition duration-300">Contact</a>
      </div>
    </header>
  );
};

export default Header;
