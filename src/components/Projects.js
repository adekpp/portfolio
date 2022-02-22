import React from "react";
import "./Projects.css";
import weather from "../img/weather.jpg";
import gallery from "../img/gallery.jpg";
import recipes from "../img/recipes.jpg"
import { useDoubleTap } from "use-double-tap";
import { BrowserView, MobileView } from "react-device-detect";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
//animation
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const Wrapper = styled.div`
  animation: 2s ${fadeInAnimation};
`;

export const Projects = () => {
  const { mode } = useContext(ThemeContext);

  const app1 = useDoubleTap((event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open("https://gallery-api-unsplash-demo.herokuapp.com/");
     return false;
    
  });
  const app2 = useDoubleTap((event) => {
    // Your action here
    window.open("https://app-weather-now.herokuapp.com/");
  });

  const app3 = useDoubleTap((event) => {
    // Your action here
    window.open("https://cooking-recipes-db254.web.app/");
  });

  return (
    <div className="projects flex flex-grow flex-col  mx-auto text-gray-900 select-none ">
    <h1 className={`text-center md:text-2xl ${mode}`}>Projects:</h1>
      <div className="flex flex-col mt-8 md:mt-32 md:flex-row flex-grow flex-nowrap justify-start md:justify-center place-items-start gap-6">
        <Wrapper>
          <MobileView>
          <div {...app2} className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none">
            <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
              <p className="drop-shadow-sm">Weather App</p>
            </div>

            <img src={weather} alt="weather" />
            <div className="content text-gray-900 select-none">
            A simple app to check the current weather.<br/>
             App is using OpenWeatherMap API. /Double tap to open.
            </div>
          </div>
          </MobileView>
          <BrowserView>
          <a 
          href="https://app-weather-now.herokuapp.com/" target="_blank"
          rel="noopener noreferrer">
          <div className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none">
            <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
              <p className="drop-shadow-sm">Weather App</p>
            </div>
            
            <img src={weather} alt="weather" />
            <div className="content text-gray-900 select-none">
            A simple app to check the current weather.
             App is using OpenWeatherMap API.
            </div>
          </div></a>
          </BrowserView>
        </Wrapper>
        <Wrapper>
        <MobileView>
          <div {...app1}
           className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none">
            <div 
            className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
              <p className="drop-shadow-sm">Gallery App</p>
            </div>

            <img src={gallery} alt="photos" />
            <div className="content text-gray-900">
            This app uses the Unsplash API. Styling is not too fancy, but app is using masonry grid layout which looks very nice. /Double tap to open.
            </div>
          </div>
          </MobileView>
          <BrowserView>
          <a 
          href="https://gallery-api-unsplash-demo.herokuapp.com/" target="_blank"
          rel="noopener noreferrer">
          <div className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none">
            <div className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
              <p className="drop-shadow-sm">Gallery App</p>
            </div>

            <img src={gallery} alt="photos" />
            <div className="content text-gray-900">
            This app uses the Unsplash API. Styling is not too fancy, but app is using masonry grid layout which looks very nice.
            </div>
          </div>
          </a>
          </BrowserView>
        </Wrapper>
        <Wrapper>
        <MobileView>
          <div {...app3}
           className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none">
            <div 
            className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
              <p className="drop-shadow-sm">Cooking recipes</p>
            </div>

            <img src={recipes} alt="photos" />
            <div className="content text-gray-900">
            Create and save cooking recipes. App is using Firestore Database. /Double tap to open.
            </div>
          </div>
          </MobileView>
          <BrowserView>
          <a 
          href="https://cooking-recipes-db254.web.app/" target="_blank"
          rel="noopener noreferrer">
          <div className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none">
            <div className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
              <p className="drop-shadow-sm">Cooking recipes</p>
            </div>

            <img src={recipes} alt="photos" />
            <div className="content text-gray-900">
            Create and save cooking recipes. App is using Firestore Database.
            </div>
          </div>
          </a>
          </BrowserView>
        </Wrapper>
      </div>
    </div>
  );
};
