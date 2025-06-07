import imgAzFund from "../../../../../src/assets/microsoft-certified-fundamentals-badge.svg";
import imginfa from "../../../../../src/assets/INFA-c4767c1c.png";
import imgMSExam from "../../../../../src/assets/MSexam.webp";
import imgMSCert from "../../../../../src/assets/microsoft-certified-general-badge.svg";

export default function AwardsTab(){
    return (
        <section id="awards-tab">
            <div>
                <img src={imgAzFund} />
                <p>Azure<br />Fundamentals</p>
            </div>
            <div>
                <img src={imginfa} />
                <p>2019 Informatica<br />Customer Advocacy<br />Award</p>
            </div>  
            <div>
                <img src={imgMSExam} />
                <p>Querying<br />Microsoft SQL<br />Server<br />2012/2014</p>
            </div>                      
            <div>
                <img src={imgMSCert} />
                <p>Microsoft<br />Certified<br />Professional</p>
            </div>            
        </section>
    )
}