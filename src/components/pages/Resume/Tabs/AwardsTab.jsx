import imgAzFund from "../../../../../src/assets/microsoft-certified-fundamentals-badge.svg";
import imginfa from "../../../../../src/assets/INFA-c4767c1c.png";
import imgMSExam from "../../../../../src/assets/MSexam.webp";
import imgMSCert from "../../../../../src/assets/microsoft-certified-general-badge.svg";

export default function AwardsTab(){
    return (
        <section id="awards-tab">
            <div>
                <img src={imgAzFund} alt="Microsoft Azure Fundamentals certification badge" loading="lazy" />
                <p>Azure<br />Fundamentals</p>
            </div>
            <div>
                <img src={imginfa} alt="2019 Informatica Customer Advocacy Award" loading="lazy" />
                <p>2019 Informatica<br />Customer Advocacy<br />Award</p>
            </div>  
            <div>
                <img src={imgMSExam} alt="Microsoft SQL Server 2012/2014 Querying certification" loading="lazy" />
                <p>Querying<br />Microsoft SQL<br />Server<br />2012/2014</p>
            </div>                      
            <div>
                <img src={imgMSCert} alt="Microsoft Certified Professional badge" loading="lazy" />
                <p>Microsoft<br />Certified<br />Professional</p>
            </div>            
        </section>
    )
}