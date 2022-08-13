import React, { useRef, useState } from "react";
import "../contact/contact.css";
import emailjs from "emailjs-com";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Footer from "../footer/Footer";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oghq61g",
        "template_rmknsii",
        formRef.current,
        "user_vEPkvyiHXzCGT4orBq6sy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
      <div className="contact-banner"></div>
        <div className="contact-left">
          <h1 className="contact-title">
            {" "}
            Contact me
            {/* <IoPaperPlaneOutline id = "contact-icon" /> */}
          </h1>

          <div className="contact-info">
            <div className="contact-info-items">
              <br />{" "}
              <h3 className="contact-info-item">
                <AiOutlinePhone />
                +1 (786)589-9327
              </h3>
              <br />{" "}
              <h3 className="contact-info-item">
                {" "}
                <AiOutlineMail /> Ccord042@fiu.edu
              </h3>
              <br />{" "}
              <h3 className="contact-info-item">
                {" "}
                <IoLocationOutline /> Located in Miami,FL
              </h3>
            </div>
          </div>
          <Footer/>
        </div>
        <div className="contact-right">
          <h3 className="contact-desc">
            <b>Looking to contact me?</b> Get in touch.
          </h3>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
           
            <button>Submit</button>
            
            {done && "  Thank you for your submission!"}
          </form>
       
        </div>
       
      </div>
      
    </div>
  );
}

export default Contact;
