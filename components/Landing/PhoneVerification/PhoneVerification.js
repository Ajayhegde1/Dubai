import React, { useState } from "react";

export function PhoneVerification() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleGenerateOTP = () => {
    setShowOtpInput(true);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Only allow numbers in the phone number input field
    if (/^\d*$/.test(value) || value === "") {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-gray-100 rounded shadow-md">
      <input
        className="mb-4 px-3 py-2 rounded border w-full transition duration-500 ease-in-out transform hover:scale-105"
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105"
        onClick={handleGenerateOTP}
      >
        Generate OTP
      </button>
      {showOtpInput && (
        <>
          <input
            className="mb-4 px-3 py-2 rounded border w-full transition duration-500 ease-in-out transform hover:scale-105"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-500 ease-in-out transform hover:scale-105">
            Register
          </button>
        </>
      )}
      <a
        className="block text-center text-blue-500 hover:text-blue-600 transition duration-500 ease-in-out transform hover:scale-105 mt-[10px]"
        href="#"
      >
        Already registered? Click here to login
      </a>
    </div>
  );
}
