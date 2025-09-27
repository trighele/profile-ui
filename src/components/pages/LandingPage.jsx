import { Link } from "react-router-dom";
import imgHero from "../../../src/assets/hero-image-BXUSgUWd.png";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing-main">
      <h1>Tom Righele</h1>
      <p>Senior Application Full Stack Developer</p>
      <p>Cloud Data Engineer</p>
      <p>DevOps Experience</p>
      <br />
      <br />
      
      <div>
        <img src={imgHero} className="logo hero" />
      </div>
    </section>
  );
}
