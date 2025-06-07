import { useState } from "react";
import imgLinkedIn from "../../../../src/assets/LinkedIn_icon.svg.png";
import imgFacebook from "../../../../src/assets/facebook.png";
import imgLetter from "../../../../src/assets/letter.png";
import "./ContactPage.css";

export default function ContactPage() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [showErrorText, setShowErrorText] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;
  const apiToEmailAddress = import.meta.env.VITE_APP_TO_EMAIl;

  function handleChangeName(event) {
    if (showErrorText) {
      setShowErrorText(false);
    }
    if (showSuccessText){
      setShowSuccessText(false);
    }
    setInputName(event.target.value);
  }

  function handleChangeEmail(event) {
    if (showErrorText) {
      setShowErrorText(false);
    }
    if (showSuccessText){
      setShowSuccessText(false);
    }    
    setEmail(event.target.value);
  }

  function handleChangeMessage(event) {
    if (showErrorText) {
      setShowErrorText(false);
    }
    if (showSuccessText){
      setShowSuccessText(false);
    }    
    setInputMessage(event.target.value);
  }

  const errorTextStyle = {
    display: "none",
  };

  async function handleSendEmail() {
    if (isValidName && isValidEmail && isValidMessage) {
      try {
        const response = await fetch(`${apiBaseUrl}/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: apiToEmailAddress,
            subject: "TomRighele.com Contact",
            html_content: `<body> <p>Name: ${inputName}</p> <p>Email: ${inputEmail}</p> <p>Message: ${inputMessage}</p> </body>`, // Use html_content as per your JSON
          }),
        });
        setShowSuccessText(true);
      } catch (error){
        console.error('Error sending email:', error);
      }
    } else {
      setShowErrorText(true);
    }
  }

  const isValidName = inputName.length > 0;

  let isValidEmail;
  if (inputEmail.length > 0 && inputEmail.includes("@")) {
    isValidEmail = true;
  } else {
    isValidEmail = false;
  }

  const isValidMessage = inputMessage.length > 0;

  return (
    <section id="contact-page">
      <div className="form-container">
        <h2>Contact Me</h2>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputName}
          onChange={handleChangeName}
          className={isValidName ? "valid" : undefined}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={inputEmail}
          onChange={handleChangeEmail}
          className={
            inputEmail.length > 0
              ? isValidEmail
                ? "valid"
                : "invalid"
              : undefined
          }
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="10"
          cols="33"
          maxLength="500"
          value={inputMessage}
          onChange={handleChangeMessage}
          className={isValidMessage ? "valid" : undefined}
          required
        />
        <button onClick={handleSendEmail}>
          <img src={imgLetter} />
          Send
        </button>
        {showErrorText && (
          <p className="error-text">
            Please make sure all fields are correct <br />
            before sending.
          </p>
        )}
        {showSuccessText && (
          <p className="success-text">Successfully Sent! Thank you!</p>
        )}
      </div>
      <div className="social-media-container">
        <a href="https://www.linkedin.com/in/thomas-righele" target="_blank">
          <img src={imgLinkedIn} className="linkedin" />
        </a>
        <a href="https://www.facebook.com/tom.righele.2025" target="_blank">
          <img src={imgFacebook} className="facebook" />
        </a>
      </div>
    </section>
  );
}
