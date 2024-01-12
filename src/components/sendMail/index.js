import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./index.css";

const SendMailer = () => {
  const [yourName, setyourName] = useState("");
  const [yourEmail, setyourEmail] = useState("");
  const [textArea, settextArea] = useState("");

  const sendMailButton = (event) => {
    event.preventDefault();
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
      },
      (error) => {
        console.log(error.text);
      }
    );
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
      <h1 className="heading">Send Mailer</h1>
      <form className="form-card" onSubmit={sendMailButton}>
        <div className="input-field">
          <label htmlFor="nameField" className="label">
            Your Name
          </label>
          <input
            type="text"
            id="nameField"
            className="input"
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
            value={textArea}
            onChange={changeTextArea}
          />
        </div>
        <button type="submit" className="send-button">
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default SendMailer;
