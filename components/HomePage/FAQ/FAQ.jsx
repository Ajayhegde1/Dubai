import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modalFAQHelper.css"; // Import your CSS file
import passPortImg from "@/public/passport.png";
import Image from "next/image";
import { homePageStyles } from "@/app/Styles/HomePageStyles";
import vistaraImg from "@/public/vistara.jpeg";
const FAQ = ({
  isOpen,
  onClose,
  status = "applied",
  currentStage = "Processing",
}) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [passportOpen, setPassportOpen] = useState(false);
  const [visaOpen, setVisaOpen] = useState(false);
  const [flightOpen, setFlightOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const downloadTicket = () => {
    // Logic for downloading ticket
  };
  return (
    <div className="modala" style={modalStyle}>
      <div className="modal-contenta">
        <span className="closea" onClick={onClose}>
          &times;
        </span>

        <h2>FAQs</h2>
        <div>
          {/* Passport Application FAQs */}
          <div className={`faq-section ${passportOpen ? "active" : ""}`}>
            <h3
              onClick={() => setPassportOpen(!passportOpen)}
              className="faq-question"
            >
              Passport Application
              <span className="toggle-icon">&#9660;</span>
            </h3>
            {passportOpen && (
              <div className="faq-answer">
                <p>
                  <strong>Q: How do I apply for a passport?</strong>
                </p>
                <p>
                  A: You can apply for a passport by visiting your country's
                  passport office or applying online through their official
                  website.
                </p>
                <p>
                  <strong>
                    Q: What documents do I need for a passport application?
                  </strong>
                </p>
                <p>
                  A: Generally, you will need proof of identity, proof of
                  citizenship, passport-sized photographs, and a completed
                  application form.
                </p>
              </div>
            )}
          </div>

          {/* Visa Application FAQs */}
          <div className={`faq-section ${visaOpen ? "active" : ""}`}>
            <h3 onClick={() => setVisaOpen(!visaOpen)} className="faq-question">
              Visa Application
              <span className="toggle-icon">&#9660;</span>
            </h3>
            {visaOpen && (
              <div className="faq-answer">
                <p>
                  <strong>Q: How do I apply for a visa?</strong>
                </p>
                <p>
                  A: You can apply for a visa by contacting the embassy or
                  consulate of the country you wish to visit or by applying
                  online through their official website.
                </p>
                <p>
                  <strong>
                    Q: What documents do I need for a visa application?
                  </strong>
                </p>
                <p>
                  A: The required documents vary depending on the country and
                  type of visa you are applying for. Generally, you will need a
                  completed application form, passport, photographs, and
                  supporting documents.
                </p>
              </div>
            )}
          </div>

          {/* Flight Tickets FAQs */}
          <div className={`faq-section ${flightOpen ? "active" : ""}`}>
            <h3
              onClick={() => setFlightOpen(!flightOpen)}
              className="faq-question"
            >
              Flight Tickets
              <span className="toggle-icon">&#9660;</span>
            </h3>
            {flightOpen && (
              <div className="faq-answer">
                <p>
                  <strong>Q: How do I book a flight ticket?</strong>
                </p>
                <p>
                  A: You can book a flight ticket online through various travel
                  websites or directly through the airline's website or office.
                </p>
                <p>
                  <strong>
                    Q: What information do I need to book a flight ticket?
                  </strong>
                </p>
                <p>
                  A: You will need passenger details such as full name, date of
                  birth, passport information, and travel dates.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FAQ.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default FAQ;
