import { useState } from "react";
import TechSkills from './Tabs/TechSkills.jsx'
import ExperienceTab from "./Tabs/ExperienceTab.jsx";
import AwardsTab from "./Tabs/AwardsTab.jsx";
import TabButton from "./TabButton.jsx";
import "./ResumePage.css";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState(0);

  function handleClick(id){
    setActiveTab(id);
  }

  return (
    <section id="resume">
      <menu>
        <TabButton id={0} activeTab={activeTab} onClick={handleClick}>
          Tech <br />
          Skills
        </TabButton>
        <TabButton id={1} activeTab={activeTab} onClick={handleClick}>
          Experience
        </TabButton>
        <TabButton id={2} activeTab={activeTab} onClick={handleClick}>
          Awards & <br />
          Certification
        </TabButton>
        <TabButton id={3} activeTab={activeTab} onClick={handleClick}>
          Download
        </TabButton>
      </menu>
      {activeTab === 0 && <TechSkills />}
      {activeTab === 1 && <ExperienceTab />}
      {activeTab === 2 && <AwardsTab />}
    </section>
  );
}
