import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing-main">
      <h1>Tom Righele</h1>
      <p>Senior Application Full Stack Developer</p>
      <p>Cloud Data Engineer</p>
      <p>DevOps Experience</p>
      
      {/* <Link to="/resume">
        <button>Get Started...</button>
      </Link> */}
    </section>
  );
}
