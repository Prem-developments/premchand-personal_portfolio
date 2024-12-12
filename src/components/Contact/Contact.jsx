import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const email = "premchandmalhi969@gmail.com";
  const ref = useRef(null);
  const isVisible = useScrollVisibility(ref);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
  
    const SERVICE_ID = "service_wqirt5k"; // Replace with your EmailJS Service ID
    const TEMPLATE_ID = "template_2tbaws7"; // Replace with your EmailJS Template ID
    const PUBLIC_KEY = "Q3yBM11qaWN6eugSs"; // Replace with your Public Key from EmailJS
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Failed to send message. Please try again.");
      });
  
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -70 }}
        transition={{ duration: 1 }}
      >
        <h1 id="contact" className="heading2">Contact Me</h1>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="Container">
          <div className="Grid">
            <div className="Card">
              <h1 className="heading3">Let's get in touch.</h1>
              <form onSubmit={handleSendMessage}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="sendButton">
                  Send Message
                </button>
              </form>
              {status && <p className="statusMessage">{status}</p>}
            </div>
            <div className="linkButtons">
              <a
                href="https://github.com/Prem-developments"
                target="_blank"
                rel="noopener noreferrer"
                className="linkButton"
              >
                <div className="contentStart">
                  <img
                    src="/banner-icons/github.svg"
                    height="40px"
                    alt="github"
                  />
                  <span>GitHub</span>
                </div>
                <img
                  src="/icons/arrow-up-right-light.svg"
                  alt="arrow-up"
                  className="arrowIcon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/premchand-malhi-51a0a4237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="linkButton"
              >
                <div className="contentStart">
                  <img
                    src="/banner-icons/linkedin.svg"
                    height={"40px"}
                    alt="linkedin"
                  />
                  LinkedIn
                </div>
                <img
                  src="/icons/arrow-up-right-light.svg"
                  alt="arrow-up"
                  className="arrowIcon"
                />
              </a>
            </div>
            <div className="linkButtons">
              <a
                href="https://www.fiverr.com/pe/9PDqke"
                target="_blank"
                rel="noopener noreferrer"
                className="linkButton"
              >
                <div className="contentStart">
                  <img
                    src="/banner-icons/fiverr.png"
                    height="40px"
                    width="50px"
                    alt="fiverr"
                  />
                  <span>Fiverr</span>
                </div>
                <img
                  src="/icons/arrow-up-right-light.svg"
                  alt="arrow-up"
                  className="arrowIcon"
                />
              </a>
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="linkButton"
              >
                <div className="contentStart">
                  <img
                    src="/banner-icons/email-3.png"
                    height={"40px"}
                    alt="Email"
                  />
                  Email
                </div>
                <img
                  src="/icons/arrow-up-right-light.svg"
                  alt="arrow-up"
                  className="arrowIcon"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
