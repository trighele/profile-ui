import ExperienceItem from "./ExperienceItem.jsx";
import experienceData from "./ExperienceData.jsx";

export default function ExperienceTab() {
  return (
    <section id="experience-tab">
      {experienceData.map((job) => {
        return <ExperienceItem key={job.id} job={job} />;
      })}
    </section>
  );
}
