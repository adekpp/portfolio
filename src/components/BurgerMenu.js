import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
 const BurgerMenu = (props) => {

  const { btn } = useContext(ThemeContext)
 
  
  
  const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '26px',
        height: '20px',
        right: '10px',
        top: '15px'
      },
      bmBurgerBars: {
        background: btn
      },
      bmBurgerBarsHover: {
        background: '#FF7BAC'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

  return (
    // Pass on our props
    <Menu width={ '200px' } right styles={styles} {...props}>
        <ul>
        <li className="mb-4">
        <NavLink
        exact to="/"
        activeStyle={{ 
          borderBottom: '#FF7BAC solid 2px' }}>
        Home
        </NavLink>
        </li>
        <li className="mb-4">
        <NavLink to="/projects"
        activeStyle={{ 
          borderBottom: '#FF7BAC solid 2px' }}>
        Projects
        </NavLink>
        </li>
        <li>
        <NavLink to="/contact" 
        activeStyle={{ 
          borderBottom: '#FF7BAC solid 2px' }}>
        Contact
        </NavLink>
        </li>
        </ul>
    </Menu>
  );
};
export default BurgerMenu