import { useEffect, useState } from "react";

import Loader from "react-loaders";

import WordCloud from "./wordcloud";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1 style={{ color: "skyblue", }}>
            <AnimatedLetters letterClass={letterClass} strArray={"SKILLS".split("")} idx={15} />
          </h1>
          <p>
            I have a strong foundation in full-stack web development, with a
            focus on building responsive, scalable, and user-friendly
            applications. My experience includes developing MERN stack projects,
            integrating REST APIs, implementing secure authentication, and
            optimizing application performance.
          </p>
          <p>
            My skill set spans across frontend and backend development, database
            management, and modern web technologies. I am committed to
            continuous learning, staying up to date with industry trends, and
            refining my skills to solve real-world problems efficiently.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
