import { useState } from "react";
import profilePic from "../assets/Img/profilePic.jpg"; 
import ContactInfo from "./ContactInfo";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

export default function ProfileCard() {
  const [showContact, setShowContact] = useState(false);

  const fullName = capitalizeWords("shizuka yamashita");

  return (
    <article className="hero-card">

      <div className="hero-photo-wrap">
        <img className="hero-photo" src={profilePic} alt="{fullName}" />
        <div className="photo-overlay" />
      </div>

      <div className="hero-panel">
        <p className="overline">About me</p>
        <h1 className="display-name">
          {fullName.split(" ")[0]}<br />{fullName.split(" ")[1]}
        </h1>
        <p className="bio">
          Software Engineering<br />
          I am from Japan.<br />
          Nice to meet you!
        </p>

        <button className="btn" onClick={() => setShowContact(v => !v)}>
          {showContact ? "Hide my contact" : "Display my contact"}
        </button>

        {showContact && <ContactInfo email="xxx@example.com" phone="+1-xxx-xxx-xxx" />}

        <div className="socials">
          <a 
            href="https://www.instagram.com/yama.shita9?igsh=MTJhMDh3dXNnb2Npcg%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            >
              <FaInstagram />
            </a>
          <a href="https://github.com/yamadaxxx09" 
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            >
              <FaGithub />
            </a>
          <a href="https://www.linkedin.com/in/shizuka-yamashita-a98440363?trk=contact-info"
            target="_blank" 
            rel="noreferrer" 
            className="icon-link"
            >
              <FaLinkedin />
            </a>
        </div>
      </div>
    </article>
  );
}
