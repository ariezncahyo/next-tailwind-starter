import React, { useEffect } from "react";
import AOS from 'aos'
import DarkModeToggle from "./DarkModeToggle"
import { FaBars } from 'react-icons/fa'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, [])
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
                <FaBars/>
            </button>
            <DarkModeToggle/>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center text-gray-800 dark:text-white" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-desktop">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:text-pink-600" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:text-pink-600" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:text-pink-600" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:text-pink-600" href="#">
                    Contact
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}