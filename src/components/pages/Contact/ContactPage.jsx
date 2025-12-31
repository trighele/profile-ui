import { useState } from "react";
import imgLinkedIn from "../../../../src/assets/LinkedIn_icon.svg.png";
import imgFacebook from "../../../../src/assets/facebook.png";
import imgGitHub from "../../../../src/assets/Github-desktop-logo-symbol.svg.png";
import imgLetter from "../../../../src/assets/letter.png";
import "./ContactPage.css";

export default function ContactPage() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [showErrorText, setShowErrorText] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;
  const apiToEmailAddress = import.meta.env.VITE_APP_TO_EMAIL;

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

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidName = inputName.trim().length > 0;
  const isValidEmail = inputEmail.trim().length > 0 && emailRegex.test(inputEmail);
  const isValidMessage = inputMessage.trim().length > 0;

  async function handleSendEmail(e) {
    e?.preventDefault();
    
    if (!isValidName || !isValidEmail || !isValidMessage) {
      setShowErrorText(true);
      setErrorMessage("Please fill in all fields correctly before sending.");
      return;
    }

    setIsLoading(true);
    setShowErrorText(false);
    setShowSuccessText(false);
    setErrorMessage("");

    try {
      const response = await fetch(`${apiBaseUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: apiToEmailAddress,
          subject: "TomRighele.com Contact",
          html_content: `<body> <p>Name: ${inputName}</p> <p>Email: ${inputEmail}</p> <p>Message: ${inputMessage}</p> </body>`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // Reset form on success
      setInputName("");
      setEmail("");
      setInputMessage("");
      setShowSuccessText(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setShowErrorText(true);
      setErrorMessage("Failed to send message. Please try again later or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main id="contact-page">
      <section className="form-container" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Contact Me</h1>
        <form onSubmit={handleSendEmail} noValidate>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputName}
            onChange={handleChangeName}
            className={inputName.length > 0 ? (isValidName ? "valid" : "invalid") : undefined}
            required
            aria-required="true"
            aria-invalid={!isValidName && inputName.length > 0}
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
            aria-required="true"
            aria-invalid={!isValidEmail && inputEmail.length > 0}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message (max 500 characters)"
            rows="10"
            cols="33"
            maxLength="500"
            value={inputMessage}
            onChange={handleChangeMessage}
            className={inputMessage.length > 0 ? (isValidMessage ? "valid" : "invalid") : undefined}
            required
            aria-required="true"
            aria-invalid={!isValidMessage && inputMessage.length > 0}
          />
          <div className="character-count">
            {inputMessage.length}/500 characters
          </div>
          <button type="submit" disabled={isLoading}>
            <img src={imgLetter} alt="Send email icon" />
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        {showErrorText && (
          <p className="error-text" role="alert">
            {errorMessage || "Please make sure all fields are correct before sending."}
          </p>
        )}
        {showSuccessText && (
          <p className="success-text" role="alert">Successfully Sent! Thank you!</p>
        )}
      </section>
      <aside className="social-media-container" aria-label="Social media links">
        <a 
          href="https://www.linkedin.com/in/thomas-righele" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Tom Righele's LinkedIn profile"
        >
          <img src={imgLinkedIn} className="linkedin" alt="LinkedIn icon" />
        </a>
        <a 
          href="https://www.facebook.com/tom.righele.2025" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Tom Righele's Facebook profile"
        >
          <img src={imgFacebook} className="facebook" alt="Facebook icon" />
        </a>
        <a 
          href="https://github.com/trighele" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Tom Righele's GitHub profile"
        >
          <img src={imgGitHub} className="github" alt="GitHub icon" />
        </a>
      </aside>
    </main>
  );
}

