import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded bg-black text-white dark:bg-gray-500 transition-colors duration-300"
              : "px-4 py-2 rounded bg-transparent text-black hover:bg-black hover:text-white dark:text-gray-400 dark:hover:bg-gray-500 transition-colors duration-300 focus:outline-none focus:bg-black focus:text-white"
          }
          to="/about"
        >
          About me
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded bg-black text-white dark:bg-gray-500 transition-colors duration-300"
              : "px-4 py-2 rounded bg-transparent text-black hover:bg-black hover:text-white dark:text-gray-400 dark:hover:bg-gray-500 transition-colors duration-300 focus:outline-none focus:bg-black focus:text-white"
          }
          to="/projects"
        >
          Projects
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar flex flex-col lg:flex-row justify-between items-center m-3 mb-6">
      
      <div className="flex items-center justify-between w-full lg:w-auto">
        <button
          className="text-xl font-semibold dark:bg-transparent dark:hover:bg-gray-800 transition-colors duration-300 p-2 rounded cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="lg:hidden block text-black hover:text-white hover:bg-black p-2 rounded transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:space-x-4 w-full lg:w-auto transition-all duration-300`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
