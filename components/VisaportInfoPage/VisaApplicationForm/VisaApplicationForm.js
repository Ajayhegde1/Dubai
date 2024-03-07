import React, { useState } from "react";
import "./helperVisa.css";

export default function VisaApplicationForm() {
  const [page, setPage] = useState(1);

  const pages = [
    { name: "Personal Info", component: <PersonalInfoPage /> },
    { name: "Travel Purpose", component: <TravelPurposePage /> },
    { name: "Passport Copy", component: <PassportCopyPage /> },
  ];

  const handleNext = () => {
    if (page < pages.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="visa-application-form">
      <div className="progress-tracker">
        {pages.map((item, index) => (
          <div
            key={index}
            className={`progress-item ${index < page ? "active" : ""}`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="form-page">{pages[page - 1].component}</div>

      <div className="page-navigation">
        {page !== 1 && <button onClick={handlePrev}>Previous</button>}
        {page !== pages.length ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

function PersonalInfoPage() {
  return <div>Personal Information Page</div>;
}

function TravelPurposePage() {
  return <div>Travel Purpose Page</div>;
}

function PassportCopyPage() {
  return <div>Passport Copy Page</div>;
}
