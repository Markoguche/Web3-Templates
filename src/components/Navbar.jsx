import logo from "../assets/Images/logo.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Usdc from '../pages/USDC';
import Company from '../pages/Company';
import Developers from '../pages/Developers';
import Partners from '../pages/Partners';
import Products from '../pages/Products';
import Solution from '../pages/Solution';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (name) => {
    if (dropdown === name) {
      setDropdown(null);
    } else {
      setDropdown(name);
    }
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
        <ul className="flex space-x-0 text-[#29233b] font-semibold">
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
              {/* className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg z-10 p-4 */}
              {dropdown === menu && (
                <div
                className="absolute left-0 top-8"
                  style={{ height: '400px', width: '100vw', left: '0' }} // Set width to full viewport and left to 0
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
        <div className="flex space-x-4">
          <button className="border font-semibold border-[#29233b] text-[#29233b] py-2 px-4 rounded hover:bg-[#29233b] hover:text-white transition">
            Get Started
          </button>
          <button className="text-[#29233b] font-semibold text-xs py-2 px-4">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
