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
    <main id="resume">
      <header>
        <h1>Resume</h1>
      </header>
      <nav role="tablist" aria-label="Resume sections">
        <TabButton id={0} activeTab={activeTab} onClick={handleClick}>
          Tech <br />
          Skills
        </TabButton>
        <TabButton id={1} activeTab={activeTab} onClick={handleClick}>
          Experience
        </TabButton>
        <TabButton id={2} activeTab={activeTab} onClick={handleClick}>
          Awards & <br />
          Certs
        </TabButton>
        <TabButton id={3} activeTab={activeTab} onClick={handleClick}>
          Download
        </TabButton>
      </nav>
      {activeTab === 0 && <TechSkills />}
      {activeTab === 1 && <ExperienceTab />}
      {activeTab === 2 && <AwardsTab />}
    </main>
  );
}
