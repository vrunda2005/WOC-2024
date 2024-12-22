import React from "react";
import "./Contact_Us.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label>Full Name</label>
            <input />
          <label>E-mail</label>
            <input />           
          <label>
          <textarea placeholder="Message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
