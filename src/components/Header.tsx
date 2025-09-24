import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from "../assets/image.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-700 rounded-full mr-3">
              <img src={Icon} className='size-10' alt="autopadi" />
            </div>
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span className="text-blue-700">Auto</span>Padi
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 transition-width duration-300 ease-in-out">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-700 font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-700 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-700 font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};