import React, { useState } from "react";
import "./ContactSupportHelper.css"; // Import CSS file for styling
import contactImg from "@/public/contact.png";
import Image from "next/image";
function ContactSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form or send the data to your backend
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
    // Close the popup after submission
    setIsOpen(false);
  };

  return (
    <div className="contact-support">
      {isOpen ? (
        <div className="popup">
          <div className="popup-content">
            <span className="close-icon" onClick={togglePopup}>
              &times;
            </span>
            <h2>Contact Support</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="icon" onClick={togglePopup}>
          <Image src={contactImg} alt="Support Icon" />
        </div>
      )}
    </div>
  );
}

export default ContactSupport;
