import React from 'react'
import { NavLink } from 'react-router-dom'
import modeIcon from '../img/modeIcon.svg'
import logo from '../img/logo.svg'
import './Navbar.css'
import '../App.css'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Navbar = () => {

  const { mode, changeMode, btn, changeBtn } = useContext(ThemeContext)

  
  const toggle = () => {
    
    changeMode(mode === 'dark' ? 'light' : 'dark')
    changeBtn(btn === 'white' ? '#333' : 'white')
  }

  return (
    <div className={`nav flex flex-row w-full h-24 p-4 justify-between ${mode}`}>
    
    <NavLink exact to="/">
    <img className='w-16 md:w-24 ' src={logo} alt='logo' />
    </NavLink>
    
    <nav className='flex place-items-center'>
    <div className='hidden flex-row gap-8  mr-20 md:flex'>

        <NavLink exact to="/"
        activeStyle={{ 
          borderBottom: '#FF7BAC solid 2px' }}>
        Home
        </NavLink>

        <NavLink to="/projects"
        activeStyle={{ 
          borderBottom: '#FF7BAC solid 2px' }}>
        Projects
        </NavLink>

        <NavLink to="/contact" 
        activeStyle={{ 
          borderBottom: '#FF7BAC solid 2px' }}>
        Contact
        </NavLink>
        
        <div
        onClick={toggle} 
        className='flex flex-row place-items-center gap-1 cursor-pointer'>
          <img 
          src={modeIcon}
          alt="Light/Dark mode"
          style={{width: '20px', filter: mode === 'dark' ? 'invert(100%)' : null }}
           />
          <p className='text-sm font-light text-center hover:text-pink-400 select-none'>{mode === 'dark' ? "Light mode" : "Dark mode"}</p>
        </div>
        
        

    </div>
    <div className='flex flex-row mr-12 md:mr-0 place-self-start gap-4'>
       
    <div
        onClick={toggle} 
        className='flex flex-row place-items-center gap-1 cursor-pointer md:hidden'>
          <img 
          src={modeIcon}
          alt="Light/Dark mode"
          style={{width: '20px', filter: mode === 'dark' ? 'invert(100%)' : null }}
           />
          <p className='text-sm font-light text-center hover:text-pink-400'>{mode === 'dark' ? "Light mode" : "Dark mode"}</p>
        </div>
        </div>
    </nav>

    </div>
  )
}
