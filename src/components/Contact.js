import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Alert } from "./Alert";
import "./Contact.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

//animation
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const Wrapper = styled.div`
  animation: 2s ${fadeInAnimation};
`;


export const Contact = () => {
  const { mode } = useContext(ThemeContext);



  const form = useRef();

  const [showSendAlert, setSendAlert] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7wosmcq",
        "template_4t6favg",
        form.current,
        "user_fwkx4EFHDSWWq24EQrecL"
      )
      .then(
        (result) => {
          setSendAlert(true);
        },
        (error) => {
          console.log(error.text);
          setErrorAlert(true);
        }
      );
    if (showSendAlert) {
      form.current.reset();
    }

  };

  return (
      <Wrapper>
      <div className="flex flex-grow flex-col flex-wrap w-full place-items-center justify-start  gap-6 font-light relative">
        <div className="social flex flex-row justify-around place-items-center">
          <a
            href="http://fb.me/adrian.pietryga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.5"
              height="31.5"
              viewBox="0 0 31.5 31.5"
            >
              <path
                id="Icon_awesome-facebook-square"
                data-name="Icon awesome-facebook-square"
                d="M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z"
                transform="translate(0 -2.25)"
                fill="#ff7bac"
              />
            </svg>
          </a>

          <a
            href="https://github.com/adekpp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34.875"
              height="34.004"
              viewBox="0 0 34.875 34.004"
            >
              <path
                id="Icon_awesome-github"
                data-name="Icon awesome-github"
                d="M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z"
                transform="translate(0 -0.563)"
                fill="#ff7bac"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/adrian-pietryga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              id="Component_5_1"
              data-name="Component 5 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="31.5"
              height="31.5"
              viewBox="0 0 31.5 31.5"
            >
              <path
                id="Icon_awesome-linkedin"
                data-name="Icon awesome-linkedin"
                d="M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z"
                transform="translate(0 -2.25)"
                fill="#ff7bac"
              />
            </svg>
          </a>
        </div>
        {showSendAlert && (
          <Alert
            title="Message sent!"
            content="Thank you for reaching out to me."
          />
        )}
        {showErrorAlert && (
          <Alert
            title="Message has not been sent!"
            content="An error has occurred. Sorry."
            style={{ background: "#fc8b7e", borderColor: "red", color: "red" }}
          />
        )}
        <form
          className="flex flex-col gap-1 mt-3 md:mt-20 w-72 md:w-96 "
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="font-light">Name:</label>
          <input
            className={`border-b outline-none focus-within:border-pink-500 text-gray-900 pl-2 ${mode}`}
            type="text"
            name="user_name"
            required
          />

          <label className="font-light mt-3">Email:</label>
          <input
            className={`border-b outline-none focus-within:border-pink-500 text-gray-900 pl-2 ${mode}`}
            type="email"
            name="user_email"
            required
          />

          <label className="font-light mt-3">Message:</label>
          <textarea
            className={`border h-64 outline-none focus-within:border-pink-500 text-gray-900 p-2 ${mode}`}
            name="message"
            required
          />

          <button
            className="btn flex flex-row place-items-center justify-center gap-2 p-1 w-1/3 md:w-1/5 place-self-end font-light"
            type="submit"
          >
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              viewBox="0 0 10.208 8.75"
            >
              <path
                id="Icon_material-send"
                data-name="Icon material-send"
                d="M3,13.25l10.2-4.375L3,4.5,3,7.9l7.292.972L3,9.847Z"
                transform="translate(-3 -4.5)"
              />
            </svg>
          </button>
        </form>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-row place-items-center">
            <svg
              className="m-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              viewBox="0 0 22.5 36"
            >
              <path
                id="Icon_awesome-mobile-alt"
                data-name="Icon awesome-mobile-alt"
                d="M19.125,0H3.375A3.376,3.376,0,0,0,0,3.375v29.25A3.376,3.376,0,0,0,3.375,36h15.75A3.376,3.376,0,0,0,22.5,32.625V3.375A3.376,3.376,0,0,0,19.125,0ZM11.25,33.75A2.25,2.25,0,1,1,13.5,31.5,2.248,2.248,0,0,1,11.25,33.75Zm7.875-7.594a.846.846,0,0,1-.844.844H4.219a.846.846,0,0,1-.844-.844V4.219a.846.846,0,0,1,.844-.844H18.281a.846.846,0,0,1,.844.844Z"
                fill={mode}
              />
            </svg>
            <p className="text-sm">+48 782 974 943</p>
          </div>

          <div className="flex flex-row place-items-center">
            <svg
              className="m-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 30 24"
            >
              <path
                id="Icon_material-email"
                data-name="Icon material-email"
                d="M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6L18,19.5,6,12V9l12,7.5L30,9Z"
                transform="translate(-3 -6)"
                fill={mode}
              />
            </svg>
            <p className="text-sm hover:text-pink-600">
              <a href="mailto:adrian.pietryga@poczta.fm">
                
               adrian.pietryga@poczta.fm
              </a>
            </p>
          </div>
        </div>
      </div>
      </Wrapper>

  );
};
