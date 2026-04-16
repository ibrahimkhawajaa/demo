import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assest/Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left side - Home link (hidden on mobile) */}
          <div className="hidden md:flex md:items-center md:w-1/3">
            <Link
              to="/"
              className="text-gray-800 font-medium text-[15px] hover:text-gray-500"
            >
              Home
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center md:w-1/3">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              <img
                src={Logo}
                alt="Logo"
                className="w-32 h-28 md:w-40 md:h-35 object-contain"
              />
            </Link>
          </div>

          {/* Right side - Desktop menu */}
          <div className="hidden md:flex md:items-center md:justify-end md:w-1/3 md:gap-8">
            <Link
              to="/about"
              className="text-gray-800 font-medium text-[15px] hover:text-gray-500"
            >
              About me
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 font-medium text-[15px] hover:text-gray-500"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-800 font-medium text-[15px] hover:text-gray-500 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 font-medium text-[15px] hover:text-gray-500 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About me
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 font-medium text-[15px] hover:text-gray-500 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
