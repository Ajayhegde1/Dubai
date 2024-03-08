import React, { useState } from "react";
import "./AccordionHelper.css"; // Import your CSS file for accordion styling

export function AccordionRightSideDiv() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion border rounded-lg overflow-hidden mb-4 ${
        isOpen ? "open" : ""
      }`}
    >
      <div
        className="accordion-header bg-gray-900 text-white py-3 px-4 flex justify-between items-center cursor-pointer transition duration-300 ease-in-out"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">Conference Package Details</h3>
        <span className="text-sm">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div className="accordion-content bg-gray-100 py-4 px-4">
        <p className="text-gray-800">
          Here you can include the details of the conference package.
        </p>
      </div>
    </div>
  );
}
