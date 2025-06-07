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
          <img src={imgDataEngineer} />
        </div>
        <p>Data Engineer</p>      
      </div>
      <div>
        <div className="image-container">
          <img src={imgDatabricks} />
        </div>
        <p>Databricks</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgAzure} />
        </div>
        <p>Azure <br />Ecosystem</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgDevops} />
        </div>
        <p>Devops</p>      
      </div>       
      <div>
        <div className="image-container">
          <img src={imgPython} />
        </div>
        <p>Python</p>      
      </div>      
      <div>
        <div className="image-container">
          <img src={imgMSQL} />
        </div>
        <p>MSSQL</p>      
      </div>
      <div>
        <div className="image-container">
          <img src={imgPG} />
        </div>
        <p>POSTGRESQL</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgReact} />
        </div>
        <p>React</p>      
      </div> 
      <div>
        <div className="image-container">
          <img src={imgInfra} />
        </div>
        <p>Infrastructure <br/> as Code</p>      
      </div>       
      <div>
        <div className="image-container">
          <img src={imgKube} />
        </div>
        <p>Kubernetes</p>      
      </div>                
    </section>
  );
}
