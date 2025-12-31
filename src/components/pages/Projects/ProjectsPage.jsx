import './ProjectsPage.css';
import ProjectItem from "./ProjectItem.jsx";
import projectData from "./ProjectData.jsx";

export default function ProjectsPage() {
  return (
    <main id="projects">
      <header>
        <h1>Projects</h1>
      </header>
      <section aria-label="Project portfolio">
        {projectData.map((project) => {
          return <ProjectItem key={project.id} project={project} /> 
        })}
      </section>
    </main>
  );
}
