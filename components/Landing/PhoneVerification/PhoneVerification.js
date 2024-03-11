import React, { useState } from "react";

export function PhoneVerification() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInputReg, setShowOtpInputReg] = useState(false);
  const [showOtpInputLogin, setShowOtpInputLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleGenerateOTP = () => {
    if (showLogin) {
      setShowOtpInputLogin(true);
    } else {
      setShowOtpInputReg(true);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Only allow numbers in the phone number input field
    if (/^\d*$/.test(value) || value === "") {
      setPhoneNumber(value);
    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleBackClick = () => {
    setShowLogin(false);
    setShowOtpInputReg(false);
    setShowOtpInputLogin(false);
    setPhoneNumber("");
    setOtp("");
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-gray-100 rounded-xl shadow-md z-50 bg-opacity-10 backdrop-blur-lg">
      {showLogin ? (
        <div>
          <div
            className="flex items-center mb-4 cursor-pointer text-white text-[20px] font-[700]"
            onClick={handleBackClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </div>
          <input
            className="mb-4 px-3 py-2 rounded border w-full transition duration-500 ease-in-out transform"
            type="text"
            placeholder="Enter Mobile No."
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button
            className="mb-4 px-4 py-2x bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105"
            onClick={handleGenerateOTP}
          >
            Generate OTP
          </button>
          {showOtpInputLogin && (
            <>
              <input
                className="mb-4 px-3 py-2 rounded border w-full transition duration-500 ease-in-out transform "
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <a href="/V1/PassPortInfoPage">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-500 ease-in-out transform hover:scale-105">
                  Login
                </button>
              </a>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="mb-[10px]">
            <p className=" text-left text-[20px] font-[700] text-white ">
              Get Started
            </p>{" "}
          </div>
          {/* <div className="w-[50%] h-[1px] bg-white mb-[20px]"></div> */}
          <input
            className="mb-4 px-3 py-2 rounded border w-full transition duration-500 ease-in-out transform "
            type="text"
            placeholder="Enter Mobile No."
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button
            className="mb-4 px-4 py-2x bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105"
            onClick={handleGenerateOTP}
          >
            Generate OTP
          </button>
          {showOtpInputReg && (
            <>
              <input
                className="mb-4 px-3 py-2 rounded border w-full transition duration-500 ease-in-out transform"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <a href="/V1/PassPortInfoPage">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-500 ease-in-out transform hover:scale-105">
                  Register
                </button>
              </a>
            </>
          )}
          <a
            className="block text-center hover:font-900 font-[600] transition duration-500 ease-in-out transform hover:scale-105 mt-[10px] text-white"
            href="#"
            onClick={handleLoginClick}
          >
            Already registered? Click here to login
          </a>
        </>
      )}
    </div>
  );
}
