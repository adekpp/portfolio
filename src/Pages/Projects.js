import React from "react";
import "./Projects.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Accordion } from "../components/Accordion";
import { projects } from "../projects";
import { motion } from "framer-motion";
export const Projects = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="projects flex flex-grow flex-col  mx-auto text-gray-900 select-none mb-5"
    >
      <h1 className={`text-center md:text-2xl ${mode}`}>Projects:</h1>
      <div className="flex flex-col mt-8 md:mt-32 md:flex-row flex-grow flex-nowrap justify-start md:justify-center place-items-start gap-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <Accordion
              key={project.id}
              title={project.title}
              content={project.content}
              bg={project.bg}
              icon={project.icon}
              links={project.links}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
