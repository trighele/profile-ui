import { Link } from "react-router-dom";
import imgHero from "../../../src/assets/hero-image-BXUSgUWd.png";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <main className="landing-main" role="main">
      <header>
        <h1>Tom Righele</h1>
        <div className="landing-titles">
          <p>Senior Application Full Stack Developer</p>
          <p>Cloud Data Engineer</p>
          <p>Azure Certification</p>
          <p>DevOps Experience</p>
        </div>
      </header>
      
      <figure>
        <img src={imgHero} className="logo hero" alt="Tom Righele - Professional profile illustration" />
      </figure>
    </main>
  );
}
