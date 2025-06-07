import imgProfilePic from "../../../../src/assets/aboutme/prof.jpg";
import imgWeddingPic from "../../../../src/assets/aboutme/aboutme-2.jpg";
import "./AboutMePage.css";

export default function AboutMePage() {
  return (
    <section id="aboutme">
      <div className="first-row">
        <img className="profile-pic" src={imgProfilePic} />
        <div className="content">
          <p>Hello! I'm Tom Righele, a Senior Application Developer at Marsh & McLennan with over four years of experience in app development, integration, and project leadership. My passion for technology runs deep, spanning backend development, website creation, and hardware—I've built multiple computers for family and friends.</p>
          <p>I'm 38 years old, married to my wonderful wife, and we recently welcomed our newborn son, Tommy. We share our home with our beloved pit bull, Georgie. As a die-hard New York Yankees fan, Mariano Rivera remains my all-time favorite player, and I take pride in being a multi-time fantasy football champion.</p>
          <p>Currently, I'm actively seeking new projects and outside work opportunities. I love connecting with new people, sharing ideas, and exploring innovative collaborations. In my free time, I enjoy working out, spending quality time with family, and occasionally unwinding with a glass of tequila. I embrace life's dynamic aspects.</p>
        </div>
      </div>
      <div className="second-row">
        <div className="orange-square"></div>
        <div className="purple-square"></div>
        <img className="wedding-pic" src={imgWeddingPic} />
      </div>
    </section>
  );
}
