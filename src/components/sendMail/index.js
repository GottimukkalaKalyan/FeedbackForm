import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const SendMailer = () => {
  const [yourName, setyourName] = useState("");
  const [yourEmail, setyourEmail] = useState("");
  const [textArea, settextArea] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ButtonText = isSubmitted ? "Sending Feedback..." : "Give Feedback";
  const ButtonsClasses = isSubmitted
    ? "send-button loading-button"
    : "send-button";

  const sendMailButton = (event) => {
    event.preventDefault();
    if (yourEmail !== "" && yourName !== "" && textArea !== "") {
      setIsSubmitted(true);
      console.log(yourName, yourEmail, textArea);

      const serviceId = "service_cnbu0ob";
      const templateId = "template_by2s0dw";
      const publicKey = "dsHx3H3tJBvuhNrZS";

      const templateParams = {
        from_name: yourName,
        from_email: yourEmail,
        to_name: "Kalyan",
        message: textArea,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (result) => {
          console.log("***********", result);
          setyourName("");
          setyourEmail("");
          settextArea("");
          alert("Mail sended Successfully");
          setIsSubmitted(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      alert("Please provide all required Details..");
    }
  };

  const changeName = (event) => {
    setyourName(event.target.value);
  };

  const changeEmail = (event) => {
    setyourEmail(event.target.value);
  };

  const changeTextArea = (event) => {
    settextArea(event.target.value);
  };

  return (
    <div className="form-main-container">
      <h1 className="heading">
        Send Your Feedback to <br />
        <a
          href="https://kalyangottimukkalabio.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="span-name"
        >
          Kalyan Gottimukkala
        </a>
      </h1>
      <form className="form-card" onSubmit={sendMailButton}>
        <div className="input-field">
          <label htmlFor="nameField" className="label">
            Your Name
          </label>
          <input
            type="text"
            id="nameField"
            className="input"
            placeholder="Your Name"
            value={yourName}
            onChange={changeName}
          />
        </div>
        <div className="input-field">
          <label htmlFor="emailField" className="label">
            Your Email
          </label>
          <input
            type="email"
            id="emailField"
            className="input"
            value={yourEmail}
            placeholder="Your Email"
            onChange={changeEmail}
          />
        </div>
        <div className="input-field">
          <label htmlFor="textareaField" className="label">
            Message
          </label>
          <textarea
            rows={10}
            id="textareaField"
            className="text-area"
            placeholder="Your Message"
            value={textArea}
            onChange={changeTextArea}
          />
        </div>
        <button type="submit" className={ButtonsClasses} disabled={isSubmitted}>
          {ButtonText}
        </button>
      </form>
    </div>
  );
};

export default SendMailer;
