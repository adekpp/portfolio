import React from "react";
import { NavLink } from "react-router-dom";
import modeIcon from "../img/modeIcon.svg";
import logo from "../img/logo.svg";
import "./Navbar.css";
import "../App.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const Navbar = ({ outerContainerId }) => {
  const { mode, changeMode, btn, changeBtn } = useContext(ThemeContext);

  const toggle = () => {
    changeMode(mode === "dark" ? "light" : "dark");
    changeBtn(btn === "white" ? "#333" : "white");
  };
  let activeStyle = {
    borderBottom: "#FF7BAC solid 2px",
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={`nav flex flex-row w-full h-24 p-4 justify-between ${mode}`}
    >
      <NavLink to="/">
        <img className="w-16 md:w-24 " src={logo} alt="logo" />
      </NavLink>

      <nav className="flex place-items-center">
        <div className="hidden flex-row gap-6  mr-5 md:flex">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>

          <div
            onClick={toggle}
            className="flex flex-row place-items-center gap-1 cursor-pointer"
          >
            <img
              src={modeIcon}
              alt="Light/Dark mode"
              style={{
                width: "20px",
                filter: mode === "dark" ? "invert(100%)" : null,
              }}
            />
            <p className="text-sm font-light text-center hover:text-pink-400 select-none">
              {mode === "dark" ? "Light mode" : "Dark mode"}
            </p>
          </div>
        </div>
        <div className="flex flex-row mr-12 md:mr-0 place-self-start gap-4">
          <div
            onClick={toggle}
            className="flex flex-row place-items-center gap-1 cursor-pointer md:hidden"
          >
            <img
              src={modeIcon}
              alt="Light/Dark mode"
              style={{
                width: "20px",
                filter: mode === "dark" ? "invert(100%)" : null,
              }}
            />
            <p className="text-sm font-light text-center hover:text-pink-400">
              {mode === "dark" ? "Light mode" : "Dark mode"}
            </p>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
