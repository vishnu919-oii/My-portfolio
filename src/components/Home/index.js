import { useEffect, useState } from "react";

import Loader from "react-loaders";
import { Link } from "react-router-dom";

import "./index.scss";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className="head">
            <span>Hii...</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span> Vishnu</span>
            <br />
            <br />
            <span className="sub1">WEB DEVELOPER </span>
            <br />
            <br />
            <span className="sub2"> MERN | FULL STACK</span>
          </div>

          <h2>
            Efficient web solutions, | Building Scalable Web Applications |
            continuously learning and growth with new technologies
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
