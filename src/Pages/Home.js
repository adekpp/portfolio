import React from 'react'
import img from '../img/home.svg'
import { motion } from 'framer-motion'
export const Home = () => {

  
  return (

    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0 }}
    className={`home flex flex-col w-10/12 lg:w-1/3 mx-auto justify-start`}>
    
    <h1 className='text-4xl font-bold text-left'>Adrian Pietryga</h1>
    <h2 className='mt-2  text-xl text-left'>Junior Front End Developer</h2>
    <artice>
    <p className='mt-7 text-left font-light'>I am Adrian and I am 32 years old. I started my adventure with frontend less than 2 years ago. I did a lot of training. I mastered HTML, CSS and JS which I still learn. I feel best working with React. I have an open mind and willing to learn new things. <b>I love challenges!</b></p>
    </artice>
    <div className='p-4 z-10 mt-14 md:mt-28 place-self-center'>
    <img src={img} alt="people with computer"/>
    </div>
  </motion.section>

  )
}
