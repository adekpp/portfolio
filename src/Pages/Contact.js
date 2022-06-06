import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Alert } from "../components/Alert";
import "./Contact.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SendIcon from "@mui/icons-material/Send";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="flex flex-grow flex-col flex-wrap w-full place-items-center justify-start  gap-6 font-light relative"
    >
      <div className="social flex flex-row justify-around place-items-center">
        <a
          href="http://fb.me/adrian.pietryga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" className="text-pink-500" />
        </a>

        <a
          href="https://github.com/adekpp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" className="text-pink-500" />
        </a>

        <a
          href="https://www.linkedin.com/in/adrian-pietryga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" className="text-pink-500" />
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
          <SendIcon fontSize="small" />
        </button>
      </form>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex flex-row place-items-center">
          <PhoneIphoneIcon />
          <p className="text-sm">+48 782 974 943</p>
        </div>

        <div className="flex flex-row place-items-center">
          <EmailIcon />
          <p className="text-sm ml-1 hover:text-pink-600">
            <a href="mailto:adrian.pietryga@poczta.fm">
              adrian.pietryga@poczta.fm
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
