import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fssswh8",
      "template_9uwhtyc",
      form.current,

      "user_psbhXRanJdbALkB4pIoFB"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>v.ortegaferreres@gmail.com</h5>
            <a
              href="mailto:v.ortegaferreres@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>Whatshap</h4>
            <h5>+34622441561</h5>
            <a
              href="https://api.whatshapp.com/send?phone=+34622441561"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="You Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
