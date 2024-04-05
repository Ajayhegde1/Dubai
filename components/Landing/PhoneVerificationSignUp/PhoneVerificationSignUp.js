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

export function PhoneVerificationSignUp() {
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
      <div className="border shadow-xl  h-auto w-[90%] xl:w-[30vw] 2xl:w-[30vw] lg:w-[20vw] md:w-[30vw] rounded-[12px] py-[2vh] px-[6vw] lg:px-[2vw] md:px-[2vw] xl:px-[2vw] 2xl:px-[2vw]">
        <div className="flex flex-col items-center space-y-[5vh]">
          <div className="w-full flex flex-col items-center space-y-[1vh]">
            <p className="text-[24px] text-black font-[700] ">
              Sign Up to Portal
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
              className="mb-4 px-[4vw] lg:px-[1vw] md:px-[1vw] xl:px-[1vw] 2xl:px-[1vw]  py-[1vh] bg-blue-500 text-white font-[600] rounded-full hover:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105"
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
                <div className="w-full flex justify-center mt-[3vh]">
                  <Link href="/V1/RegistrationPage">
                    <button className="bg-[#14A800]  py-[1vh] rounded-full text-white font-[700]  px-[4vw] lg:px-[1vw] md:px-[1vw] xl:px-[1vw] 2xl:px-[1vw]">
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-[1.5vh] mt-[4vh]">
          <div className="flex gap-[1vw] items-center">
            <div className="h-[1px] w-full bg-black"></div>
            <div>
              <p className=" w-[200px]">Already have an Account?</p>
            </div>
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          <div className="w-full flex justify-center">
            <Link href="/V1/SignInPage">
              <button className="border py-[1vh]  text-black font-[300] rounded-full  px-[6vw] lg:px-[2vw] md:px-[2vw] xl:px-[2vw] 2xl:px-[2vw] ">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
