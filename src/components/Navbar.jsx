import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { FaSkullCrossbones } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../Assets/logo.png";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Project",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-slate-200">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
              <img
                src={logo}
                className="h-12 w-12 rounded-full object-contain mix-blend-multiply"
                alt="PatellAbhishekk"
                onClick={() => setMenu(!menu)}
              />
            <h1 className="font-semibold text-xl cursor-pointer">
              Abhishe<span className="text-blue-500 text-2xl">k</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="relative group cursor-pointer hover:text-blue-700"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                  <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? (
                <FaSkullCrossbones size={24} />
              ) : (
                <TiThMenuOutline size={24} />
              )}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-slate-50">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="relative group hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="text-gray-700 group-hover:text-blue-600"
                  >
                    {text}
                  </Link>
                  <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
