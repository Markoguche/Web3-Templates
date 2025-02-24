import logo from "../assets/Images/logo.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import Usdc from '../pages/USDC';
import Company from '../pages/Company';
import Developers from '../pages/Developers';
import Partners from '../pages/Partners';
import Products from '../pages/Products';
import Solution from '../pages/Solution';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    if (dropdown === name) {
      setDropdown(null);
    } else {
      setDropdown(name);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Map of menu names to their respective components
  const menuComponents = {
    USDC: <Usdc />,
    Solution: <Solution />,
    Products: <Products />,
    Developer: <Developers />,
    Partners: <Partners />,
    Company: <Company />,
  };

  return (
    <nav className="bg-white p-4 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="text-[#29233b] font-bold">
          <img src={logo} alt="logo" className="h-16 w-auto" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#29233b] focus:outline-none">
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-0 text-[#29233b] font-semibold">
          {Object.keys(menuComponents).map((menu) => (
            <li
              key={menu}
              className="relative px-4 flex items-center"
              onMouseEnter={() => toggleDropdown(menu)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <Link to={`/${menu.toLowerCase()}`} className="hover:text-gray-400 flex items-center space-x-1">
                <span>{menu}</span>
                {dropdown === menu ? (
                  <FaChevronUp className="text-xs" />
                ) : (
                  <FaChevronDown className="text-xs" />
                )}
              </Link>
              {/* Dropdown content */}
              {dropdown === menu && (
                <div
                  className="absolute left-0 top-8"
                  style={{ height: '400px', width: '100vw', left: '0' }}
                >
                  {menuComponents[menu]}
                </div>
              )}
            </li>
          ))}
          <li className="px-4">
            <Link to="/transparency" className="hover:text-gray-400">Transparency</Link>
          </li>
        </ul>

        {/* Buttons (Sign In, Get Started) - Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="border font-semibold border-[#29233b] text-[#29233b] py-2 px-4 rounded hover:bg-[#29233b] hover:text-white transition">
            Get Started
          </button>
          <button className="text-[#29233b] font-semibold text-xs py-2 px-4">
            Sign In
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <button onClick={toggleMobileMenu} className="text-[#29233b] focus:outline-none mb-4">
              <FaTimes className="text-2xl" />
            </button>
            <ul className="flex flex-col space-y-4 text-[#29233b] font-semibold">
              {Object.keys(menuComponents).map((menu) => (
                <li
                  key={menu}
                  className="relative"
                  onClick={() => toggleDropdown(menu)}
                >
                  <Link to={`/${menu.toLowerCase()}`} className="hover:text-gray-400 flex items-center space-x-1">
                    <span>{menu}</span>
                    {dropdown === menu ? (
                      <FaChevronUp className="text-xs" />
                    ) : (
                      <FaChevronDown className="text-xs" />
                    )}
                  </Link>
                  {/* Dropdown content */}
                  {dropdown === menu && (
                    <div className="mt-2">
                      {menuComponents[menu]}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link to="/transparency" className="hover:text-gray-400">Transparency</Link>
              </li>
            </ul>

            {/* Buttons (Sign In, Get Started) - Mobile */}
            <div className="mt-6 flex flex-col space-y-4">
              <button className="border font-semibold border-[#29233b] text-[#29233b] py-2 px-4 rounded hover:bg-[#29233b] hover:text-white transition">
                Get Started
              </button>
              <button className="text-[#29233b] font-semibold text-xs py-2 px-4">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;