import React, { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    const timeout = setTimeout(
      () => setLetterClass("text-animate-hover"),
      3000
    );
    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullName = form.current.name.value;
    const email = form.current.email.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    const firstName =
      fullName.split(" ")[0].charAt(0).toUpperCase() +
      fullName.split(" ")[0].slice(1).toLowerCase();

    const templateParams = {
      firstname: firstName,
      name: fullName,
      email: email,
      subject: subject,
      message: message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      toast.success("Message successfully sent!", {
        position: "bottom-center",
        autoClose: 3500,
        theme: "dark",
      });

      setTimeout(() => {
        form.current.reset();
        setLoading(false);
      }, 3800);
    } catch (err) {
      setLoading(false);
      toast.error("Failed to send the message, please try again", {
        position: "bottom-center",
        autoClose: 3500,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 style={{ color: "skyblue" }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact Me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I’m open to new opportunities and collaborations! If you’re looking
            for someone who can bring fresh ideas and deliver impactful results,
            let’s get in touch!
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button
                    type="submit"
                    className="flat-button"
                    disabled={loading}
                  >
                    {loading ? <ClipLoader color="#fff" size={20} /> : "SEND"}
                  </button>
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>

        <div className="map-wrap">
          <div className="info-map">
            Vishnu,
            <br />
            Rajapalayam,
            <br />
            Tamil Nadu,
            <br />
            India.
          </div>
          <MapContainer center={[9.436335319474285, 77.5896482836449]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.436335319474285, 77.5896482836449]}>
              <Popup>Vishnu lives here 😊</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
