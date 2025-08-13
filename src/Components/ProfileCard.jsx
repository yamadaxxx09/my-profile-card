import { useState } from "react";
import profilePic from "../assets/Img/profilePic.jpg"; 

export default function ProfileCard() {
  const [showContact, setShowContact] = useState(false);

  return (
    <article className="hero-card">

      <div className="hero-photo-wrap">
        <img className="hero-photo" src={profilePic} alt="Shizuka Yamashita" />
        <div className="photo-overlay" />
      </div>

      <div className="hero-panel">
        <p className="overline">About me</p>
        <h1 className="display-name">
          Shizuka<br />Yamashita
        </h1>
        <p className="bio">
          Software Engineering<br />
          I am from Japan.<br />
          Nice to meet you!
        </p>

        <button className="btn" onClick={() => setShowContact(v => !v)}>
          {showContact ? "Hide my contact" : "Display my contact"}
        </button>

        {showContact && (
          <div className="contact">
            <p>Email: <a href="mailto:xxx@example.com">xxx@example.com</a></p>
            <p>Phone: <a href="tel:+1xxxxxxxxx">+1-xxx-xxx-xxx</a></p>
          </div>
        )}

        <div className="socials">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="icon-link">T</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="icon-link">G</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="icon-link">L</a>
        </div>
      </div>
    </article>
  );
}
