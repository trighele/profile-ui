export default function ExperienceItem({job}) {
  return (
    <div className={job.active ? "experience-item active" : "experience-item"}>
      <div className="experience-header">
        <h2>{job.title}</h2>
        <p>
          <span style={{fontWeight: 600}}>{job.company}</span> <br />
          <span style={{fontStyle: "italic"}}>{job.location}</span> <br />
          <span style={{fontStyle: "italic"}}>{job.timeline}</span>
        </p>
      </div>
      <div className="experience-description">
        <ul className="experience-list">
            {job.description.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
