"use client";
import React, { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button, Input, Select, Space } from "antd";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

export function PhoneVerificationSignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInputReg, setShowOtpInputReg] = useState(false);
  const [showOtpInputLogin, setShowOtpInputLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [value, setValue] = React.useState("");
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
    <section className="w-[100vw] flex justify-center mt-[15vh]">
      <div className="border shadow-xl  h-auto w-[30vw] rounded-[12px] py-[2vh] px-[2vw]">
        <div className="flex flex-col items-center space-y-[5vh]">
          <div className="w-full flex flex-col items-center space-y-[1vh]">
            <p className="text-[24px] text-black font-[700] ">
              Log In to Portal
            </p>

            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-full">
              <Space.Compact>
                <Input
                  className="mb-4 px-3 py-2 rounded-xl border  transition duration-500 ease-in-out transform w-[20%] "
                  defaultValue="+91"
                  disabled
                />
                <Input
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "black",
                  }}
                  className="mb-4 px-3 py-2 rounded-xl border w-full transition duration-500 ease-in-out transform"
                  placeholder="Enter Mobile No."
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </Space.Compact>
            </div>
            {/* <input
              className="mb-4 px-3 py-2 rounded-xl border w-full transition duration-500 ease-in-out transform"
              type="text"
              placeholder="Enter Mobile No."
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            /> */}
            <button
              className="mb-4 px-[1vw] py-[1vh] bg-blue-500 text-white font-[600] rounded-full hover:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105"
              onClick={handleGenerateOTP}
            >
              Generate OTP
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {showOtpInputReg && (
            // <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            //   <InputOTPGroup>
            //     <InputOTPSlot index={0} />
            //     <InputOTPSlot index={1} />
            //     <InputOTPSlot index={2} />
            //     <InputOTPSlot index={3} />
            //     <InputOTPSlot index={4} />
            //     <InputOTPSlot index={5} />
            //   </InputOTPGroup>
            // </InputOTP>
            <div className="space-y-2">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="text-center text-sm">
                {value === "" ? <>Enter your OTP</> : <></>}
              </div>
              <div className="w-full flex justify-center">
                <Link href="/V1/HomePage">
                  <button className="bg-[#14A800] px-[1vw] py-[1vh] rounded-full text-white font-[700] mt-[3vh]">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-[1.5vh] mt-[4vh]">
          <div className="flex gap-[1vw] items-center">
            <div className="h-[1px] w-full bg-black"></div>
            <div>
              <p className=" w-[180px]">Don't have an Account?</p>
            </div>
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          <div className="w-full flex justify-center">
            <Link href="/V1/SignUpPage">
              <button className="border py-[1vh] px-[2vw] text-black font-[300] rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
