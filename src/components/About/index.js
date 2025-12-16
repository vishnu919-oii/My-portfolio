/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import {
  faGithubSquare,
  faJsSquare,
  faLinkedin,
  faMdb,
  faNode,
  faStripeS,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone" >
           <h1 style={{ color: "skyblue"}}>
            <AnimatedLetters letterClass={letterClass} strArray={"ABOUT".split("")} idx={15} />
          </h1>
        
          <span
            style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          >
            I am a passionate and detail-oriented Full Stack Developer with
            strong skills in the MERN stack, specializing in building
            responsive, user-friendly web applications.
          </span>
          <span
            style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          >
            I enjoy turning complex problems into simple, elegant solutions
            using modern technologies like React, Node.js, Express, and MongoDB.
            <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
              I have hands-on experience developing real-world projects such as
              e-commerce and portfolio applications, focusing on performance,
              clean code, and scalability. I am continuously learning new tools
              and best practices to improve my development skills and contribute
              effectively to innovative development teams
            </p>
          </span>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              {" "}
              <FontAwesomeIcon icon={faNode} color="#EFD81D" />
            </div>
            <div className="face2">
              {" "}
              <FontAwesomeIcon icon={faMdb} color="#EFD81D" />
            </div>
            <div className="face3">
              {" "}
              <FontAwesomeIcon icon={faLinkedin} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithubSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faStripeS} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
