import './ProjectsPage.css';
import ProjectItem from "./ProjectItem.jsx";
import projectData from "./ProjectData.jsx";

export default function ProjectsPage() {
  return (
    <section id="projects">
      {projectData.map((project) => {
        return <ProjectItem key={project.id} project={project} /> 
      })}
    </section>
  );
}
