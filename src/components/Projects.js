import React from "react";
import "./Projects.css";
import weatherImg from "../img/weather.jpg";
import galleryImg from "../img/gallery.jpg";
import recipesImg from "../img/recipes.jpg";
import fishingImg from "../img/fishing.jpg";
import shoppingCartImg from "../img/shoppingCart.jpg";
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

  const gallery = useDoubleTap((event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open("https://gallery-api-unsplash-demo.herokuapp.com/");
  });
  const weather = useDoubleTap((event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open("https://weather-openapi.netlify.app/");
  });

  const recipes = useDoubleTap((event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open("https://cooking-recipes-db254.web.app/");
  });

  const fishingSpots = useDoubleTap((event) => {
    event.preventDefault();
    event.stopPropagation();

    window.open("https://gdzienaryby.netlify.app/");
  });

  const shoppingCart = useDoubleTap((event) => {
    event.preventDefault();
    event.stopPropagation();

    window.open("https://shopping-cart-adrian-pietryga.netlify.app/");
  });

  return (
    <div className="projects flex flex-grow flex-col  mx-auto text-gray-900 select-none ">
      <h1 className={`text-center md:text-2xl ${mode}`}>Projects:</h1>
      <div className="flex flex-col mt-8 md:mt-32 md:flex-row flex-grow flex-wrap justify-start md:justify-center place-items-start gap-6">
        <Wrapper>
          <MobileView>
            <div
              {...shoppingCart}
              className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none"
            >
              <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
                <p className="drop-shadow-sm">Shopping Cart</p>
              </div>

              <img src={shoppingCartImg} alt="weather" />
              <div className="content text-gray-900 select-none">
                Redux toolkit - shopping cart
              </div>
            </div>
          </MobileView>
          <BrowserView>
            <a
              href="https://shopping-cart-adrian-pietryga.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none">
                <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
                  <p className="drop-shadow-sm">Shopping Cart</p>
                </div>

                <img src={shoppingCartImg} alt="weather" />
                <div className="content text-gray-900 select-none">
                  Redux toolkit - shopping cart
                </div>
              </div>
            </a>
          </BrowserView>
        </Wrapper>

        <Wrapper>
          <MobileView>
            <div
              {...fishingSpots}
              className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none"
            >
              <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
                <p className="drop-shadow-sm">Gdzie na ryby?</p>
              </div>

              <img src={fishingImg} alt="weather" />
              <div className="content text-gray-900 select-none">
                Apllication for anglers to share good fishing spots.
              </div>
            </div>
          </MobileView>
          <BrowserView>
            <a
              href="https://gdzienaryby.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none">
                <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
                  <p className="drop-shadow-sm">Gdzie na ryby?</p>
                </div>

                <img src={fishingImg} alt="weather" />
                <div className="content text-gray-900 select-none">
                  Apllication for anglers to share good fishing spots.
                </div>
              </div>
            </a>
          </BrowserView>
        </Wrapper>

        <Wrapper>
          <MobileView>
            <div
              {...weather}
              className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none"
            >
              <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
                <p className="drop-shadow-sm">Weather App</p>
              </div>

              <img src={weatherImg} alt="weather" />
              <div className="content text-gray-900 select-none">
                A simple app to check the current weather.
                <br />
                App is using OpenWeatherMap API.
              </div>
            </div>
          </MobileView>
          <BrowserView>
            <a
              href="https://weather-openapi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="img-wrapper flex flex-row  place-items-center justify-center text-white drop-shadow-md select-none">
                <div className="absolute text-xl bg-pink-500 bg-opacity-60 rounded-md p-2">
                  <p className="drop-shadow-sm">Weather App</p>
                </div>

                <img src={weatherImg} alt="weather" />
                <div className="content text-gray-900 select-none">
                  A simple app to check the current weather. App is using
                  OpenWeatherMap API.
                </div>
              </div>
            </a>
          </BrowserView>
        </Wrapper>
        <Wrapper>
          <MobileView>
            <div
              {...gallery}
              className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none"
            >
              <div className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
                <p className="drop-shadow-sm">Gallery App</p>
              </div>

              <img src={galleryImg} alt="photos" />
              <div className="content text-gray-900">
                This app uses the Unsplash API. Styling is not too fancy, but
                app is using masonry grid layout which looks very nice.
              </div>
            </div>
          </MobileView>
          <BrowserView>
            <a
              href="https://gallery-api-unsplash-demo.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none">
                <div className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
                  <p className="drop-shadow-sm">Gallery App</p>
                </div>

                <img src={galleryImg} alt="photos" />
                <div className="content text-gray-900">
                  Unsplash API with masonry grid layout
                </div>
              </div>
            </a>
          </BrowserView>
        </Wrapper>
        <Wrapper>
          <MobileView>
            <div
              {...recipes}
              className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none"
            >
              <div className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
                <p className="drop-shadow-sm">Cooking recipes</p>
              </div>

              <img src={recipesImg} alt="photos" />
              <div className="content text-gray-900">
                Create and save cooking recipes. App is using Firestore
                Database.
              </div>
            </div>
          </MobileView>
          <BrowserView>
            <a
              href="https://cooking-recipes-db254.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="img-wrapper flex flex-row         place-items-center justify-center text-white drop-shadow-md select-none">
                <div className="absolute text-xl  bg-pink-500 bg-opacity-75 rounded-md p-2">
                  <p className="drop-shadow-sm">Cooking recipes</p>
                </div>

                <img src={recipesImg} alt="photos" />
                <div className="content text-gray-900">
                  Create and save cooking recipes. App is using Firestore
                  Database.
                </div>
              </div>
            </a>
          </BrowserView>
        </Wrapper>
      </div>
    </div>
  );
};
