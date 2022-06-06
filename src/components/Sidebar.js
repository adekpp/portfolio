import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
export default (props) => {

  let activeStyle = {
    borderBottom: "#FF7BAC solid 2px",
  };

  return (
    <Menu {...props}>
      <ul>
        <li className="mb-4">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </Menu>
  );
};
