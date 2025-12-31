import imgDataEngineer from "../../../../../src/assets/techSkills/data-engineer.webp";
import imgDatabricks from "../../../../../src/assets/techSkills/databricks.png";
import imgAzure from "../../../../../src/assets/techSkills/Microsoft_Azure.svg.png";
import imgDevops from "../../../../../src/assets/techSkills/devops.png";
import imgPython from "../../../../../src/assets/techSkills/python.webp";
import imgMSQL from "../../../../../src/assets/techSkills/mssql.png";
import imgPG from "../../../../../src/assets/techSkills/postgresql-plain-wordmark-icon-2048x2042-up54u54l.png";
import imgReact from "../../../../../src/assets/techSkills/React-icon.svg.png";
import imgInfra from "../../../../../src/assets/techSkills/ioc.png";
import imgKube from "../../../../../src/assets/techSkills/kubernetes-icon-2048x1995-r1q3f8n7.png";

export default function TechSkills() {
  return (
    <section id="tech-skills">
      <div>
        <div className="image-container">
          <img src={imgDataEngineer} alt="Data Engineer icon" loading="lazy" />
        </div>
        <p>Data Engineer</p>      
      </div>
      <div>
        <div className="image-container">
          <img src={imgDatabricks} alt="Databricks logo" loading="lazy" />
        </div>
        <p>Databricks</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgAzure} alt="Microsoft Azure logo" loading="lazy" />
        </div>
        <p>Azure <br />Ecosystem</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgDevops} alt="DevOps icon" loading="lazy" />
        </div>
        <p>Devops</p>      
      </div>       
      <div>
        <div className="image-container">
          <img src={imgPython} alt="Python programming language logo" loading="lazy" />
        </div>
        <p>Python</p>      
      </div>      
      <div>
        <div className="image-container">
          <img src={imgMSQL} alt="Microsoft SQL Server logo" loading="lazy" />
        </div>
        <p>MSSQL</p>      
      </div>
      <div>
        <div className="image-container">
          <img src={imgPG} alt="PostgreSQL database logo" loading="lazy" />
        </div>
        <p>POSTGRESQL</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgReact} alt="React JavaScript framework logo" loading="lazy" />
        </div>
        <p>React</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgInfra} alt="Infrastructure as Code icon" loading="lazy" />
        </div>
        <p>Infrastructure <br/> as Code</p>      
      </div>       
      <div>
        <div className="image-container">
          <img src={imgKube} alt="Kubernetes container orchestration logo" loading="lazy" />
        </div>
        <p>Kubernetes</p>      
      </div>                
    </section>
  );
}
