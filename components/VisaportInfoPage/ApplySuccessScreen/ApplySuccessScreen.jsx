import React, { useEffect, useState } from "react";
import "./helperSuccess.css"; // Import CSS file for styles

export default function SuccessScreen() {
  const [drawTick, setDrawTick] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDrawTick(true);
    }, 300);

    // After the CSS animation completes, show the message after a delay
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 800); // Adjust the delay as per your animation duration

    return () => {
      clearTimeout(timer);
      clearTimeout(messageTimer);
    };
  }, []);
  function handleProceed() {
    // Handle the action here, such as redirecting to another page
    console.log("Proceed to the next step...");
  }
  return (
    <div className="flex flex-col w-full items-center justify-center h-full">
      <svg
        className="h-20 w-20 text-green-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          style={{
            strokeDasharray: "24",
            strokeDashoffset: drawTick ? "0" : "24",
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h1 className="text-xl font-bold text-gray-800 mb-2 text-center">
        Details collected successfully!
      </h1>
      <p className="text-gray-600 text-center">
        Kindly wait for our team to revert back.
      </p>
      {showMessage && (
        <a
          href="/V1/FlightBookingPage"
          className="text-blue-500 cursor-pointer"
          onClick={handleProceed}
        >
          Click here to proceed
        </a>
      )}
    </div>
  );
}
