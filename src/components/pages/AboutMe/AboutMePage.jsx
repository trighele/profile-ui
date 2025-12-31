import React, { useState, useEffect } from "react";
import imgProfilePic from "../../../../src/assets/aboutme/prof.jpg";
import imgPic1 from "../../../../src/assets/aboutme/aboutme-1.jpg";
import imgPic2 from "../../../../src/assets/aboutme/aboutme-2.jpg";
import imgPic3 from "../../../../src/assets/aboutme/aboutme-3.jpg";
import imgPic4 from "../../../../src/assets/aboutme/aboutme-4.jpg";
import imgPic5 from "../../../../src/assets/aboutme/aboutme-5.jpg";
import imgPic6 from "../../../../src/assets/aboutme/aboutme-6.jpg";
import imgPic7 from "../../../../src/assets/aboutme/aboutme-7.jpg";
import imgPic8 from "../../../../src/assets/aboutme/aboutme-8.jpg";
import imgPic9 from "../../../../src/assets/aboutme/aboutme-9.jpg";
import imgPic10 from "../../../../src/assets/aboutme/aboutme-10.jpg";
import "./AboutMePage.css";

export default function AboutMePage() {
  const images = [imgPic1, imgPic2, imgPic3, imgPic4, imgPic5, imgPic6, imgPic7, imgPic8, imgPic9, imgPic10];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <main id="aboutme">
      <article className="first-row">
        <figure>
          <img className="profile-pic" src={imgProfilePic} alt="Tom Righele professional headshot" />
        </figure>
        <div className="content">
          <h2>About Me</h2>
          <p>Hello! I'm Tom Righele, a Senior Application Developer at Marsh & McLennan with over four years of experience in app development, integration, and project leadership. My passion for technology runs deep, spanning backend development, website creation, and hardware—I've built multiple computers for family and friends.</p>
          <p>I'm 38 years old, married to my wonderful wife, and we recently welcomed our newborn son, Tommy. We share our home with our beloved pit bull, Georgie. As a die-hard New York Yankees fan, Mariano Rivera remains my all-time favorite player, and I take pride in being a multi-time fantasy football champion.</p>
          <p>Currently, I'm actively seeking new projects and outside work opportunities! I love connecting with new people, sharing ideas, and exploring innovative collaborations. In my free time, I enjoy working out, spending quality time with family, and occasionally unwinding with a glass of tequila. I embrace life's dynamic aspects.</p>
        </div>
      </article>
      <section className="second-row" aria-label="Photo gallery">
        <div className="orange-square" aria-hidden="true"></div>
        <div className="purple-square" aria-hidden="true"></div>
        <figure className="image-gallery">
          <img 
            className="main-pic" 
            src={images[currentIndex]} 
            alt={`Personal photo gallery image ${currentIndex + 1} of ${images.length}`}
            loading="lazy"
          />
          <button 
            type="button"
            className="prev-button" 
            onClick={handlePrev}
            aria-label="Previous image"
          > 
            ‹ 
          </button>
          <button 
            type="button"
            className="next-button" 
            onClick={handleNext}
            aria-label="Next image"
          > 
            › 
          </button>
        </figure>
      </section>
    </main>
  );
}
