import { useEffect, useState } from "react";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const workExperience = [
  {
    id: 1,
    company: "AK Infopark | Innovative IT Solutions & Services",
    companyUrl: "https://www.akinfopark.com/",
    position: "Web Development (Intern)",
    duration: "May 2024",
    location: "Kannyakumari,Nagarcoil (office)",
    achievements: [
      " Built real-time notification user interfaces using React.js, ensuring instant UI updates, smooth animations, and responsive user interactions.",
      "Developed frontend performance analytics dashboards to measure page load time and user interaction response (such as map click events) across multiple JavaScript map libraries.",
      "Designed responsive and accessible UI components using modern CSS (SCSS / Tailwind / CSS3).",
      "Integrated frontend components with REST APIs and handled dynamic data visualization within React applications.",
    ],
  },
  {
    id: 2,
    company: "AK Infopark",
    companyUrl: "https://www.akinfopark.com/",
    position: "Full Stack web Development (intern)",
    duration: "jan 2025 – Mar 2025",
    location: "Kannyakumari, Nagarcoil (office)",
    achievements: [
      "Engineered a real-time data processing and visualization module using MongoDB, Express.js, React.js, and Node.js, improving accuracy and reliability of analytical insights for end users.",
      "Built RESTful APIs with Node.js and Express.js, enabling efficient data exchange between frontend components and backend services.",
      "Ensured scalable architecture, clean code structure, and secure data handling across the full-stack application.",
    ],
  },
  
];

const Experience = () => {
  const experienceArray = "Experience".split("");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
<h1 style={{ color: "skyblue", }}>
            <AnimatedLetters letterClass={letterClass} strArray={"EXPERIENCE".split("")} idx={15} />
          </h1>
          <p>
            My journey spans multiple domains and modern web technologies, 
            shaping me into a versatile MERN stack developer focused on scalable, 
            real-world applications.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Experience;
