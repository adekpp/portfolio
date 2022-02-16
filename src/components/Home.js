import React from 'react'
import img from '../img/home.svg'
//animation
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';


const fadeInAnimation = keyframes`${fadeIn}`;
const Wrapper = styled.div`
  animation: 2s ${fadeInAnimation};
`;

export const Home = () => {

  
  return (
    <Wrapper>
    <div className={`home flex flex-col w-10/12 lg:w-1/3 mx-auto justify-start`}>
    
    <h1 className='text-4xl font-bold text-left'>Adrian Pietryga</h1>
    <h2 className='mt-5  text-xl text-left'>Junior Front End Developer</h2>
    <p className='mt-7 text-left font-light'>I am Adrian and I am 32 years old. I started my adventure with frontend less than 2 years ago. I did a lot of training. I mastered HTML, CSS and JS which I still learn. I feel best working with React in which I created this portfolio.  I have an open mind and willing to learn new things. I love challenges!</p>

    <div className='p-4 z-10 mt-14 md:mt-28 place-self-center'>
    <img src={img} alt="computer"/>
    </div>
  </div>
  
  </Wrapper>

  )
}
