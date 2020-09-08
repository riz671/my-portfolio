import styles from "../styles/Home.module.css";
import transporter from "./nodemailer.js";
import React, { useState } from "react";
import axios from "axios";

const Contact_Form = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailOptions = {
      from: email,
      to: "choudhuryrizwan97@gmail.com",
      subject: subject,
      text: message,
    };

    console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };

  return (
    <div className="home_container">
      <section className="contact_container">
        <div className="contact_header_container">
          <p className="contact_header">
            <strong>Let's Talk</strong>
          </p>
        </div>
        <form className="form_container" onSubmit={handleSubmit}>
          <div id="name" className="input_container">
            <input
              className="input_box"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div id="email" className="input_container">
            <input
              className="input_box"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div id="subject" className="input_container">
            <input
              className="input_box"
              type="text"
              value={subject}
              placeholder="Subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>

          <div id="message" className="input_container">
            <textarea
              className="input_box message_box"
              type="text"
              value={message}
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
                console.log(message);
              }}
            />
          </div>

          <div className="submit_container">
            <input className="submit_button" type="submit" value="Submit" />
          </div>
        </form>
      </section>

      <style jsx>{`
        .home_container {
          display: flex;
          width: 100vw;
          margin: 1em 0 2em 0;
          justify-content: center;
          align-items: center;
        }
        .contact_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        // ======================
        // Header
        // ======================
        .contact_header_container {
          margin-bottom: 1em;
          text-align: center;
          border-bottom: 3px solid black;
          padding: 0 1em;
        }
        .contact_header {
          font-family: "Open Sans", sans-serif;
          font-size: 1.5em;
          margin-bottom: 0.5em;
        }
        // ======================
        // Forms
        // ======================
        .input_box {
          border: 2px solid #c0c0c0;
          border-radius: 16px;
          font-size: 1.5em;
          padding: 10px 20px;
          margin: 6px;
          transition: 0.6s;
          min-width: 700px;
          font-family: "Poppins", sans-serif;
        }
        .input_box:focus {
          outline: none !important;
          border: 2px solid #72bcd4;
        }
        .message_box {
          min-height: 9em;
          max-width: 700px;
        }
        // ======================
        // Submit Button
        // ======================
        .submit_container {
          justify-content: center;
          align-items: center;
          margin-top: 6px;
        }
        .submit_button {
          background-color: #d3d3d3;
          color: #282828;
          padding: 18px 40px;
          border-radius: 30px;
          font-size: 1.5em;
          transition: 0.6s;
          border: 0.1px solid black;
        }
        .submit_button:hover {
          opacity: 0.6;
        }
        .submit_button:focus {
          opacity: 0.45;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Contact_Form;
