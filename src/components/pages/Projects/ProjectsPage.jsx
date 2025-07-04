import imgHero from "../../../../src/assets/hero-image-BXUSgUWd.png";
import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <section id="projects">
      <div>
        <img src={imgHero} className="logo hero" />
      </div>
      <div>
        <h2>Coming soon....</h2>
      </div>      
      <div>
        <p>I'm currently working on documenting and showcasing various personal projects I've completed outside of my professional work. This section will feature detailed case studies of applications I've built, technical challenges I've solved, and creative solutions I've developed in my spare time. From web applications to workout logs, I'm excited to share the innovative work that demonstrates my passion for technology beyond the office. Check back soon for comprehensive project breakdowns, code samples, and insights into my development process.</p>
        <p>For now, feel free to visit my <a href="https://github.com/trighele" target="_blank">github page</a> to see what I've currently worked on.</p>
      </div>        
    </section>
  );
}
