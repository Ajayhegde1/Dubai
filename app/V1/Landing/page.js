"use client";

import { PhoneVerification } from "@/components/Landing/PhoneVerificationSignUp/PhoneVerificationSignUp";
import logoImg from "@/public/clublogo.png";
import Image from "next/image";
import Link from "next/link";
import bg2Img from "@/public/bg2.jpeg";
import "./helper.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function Landing() {
  const lettersRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Make it loop infinitely

    // Define the animation
    tl.to(button, { duration: 1, scale: 1.05 }) // Zoom in
      .to(button, { duration: 1, scale: 1 }); // Zoom out

    return () => {
      tl.kill(); // Clean up GSAP animation when component unmounts
    };
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".h",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1, // Adjust the stagger amount as needed
      },
      {
        opacity: 1,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section className="a h-[100vh] w-[100vw] flex px-[4vw]">
      <div className="flex items-center justify-center w-[40vw] h-[100vh] ">
        <Image width="100vw" src={logoImg} />
      </div>
      <div className="flex items-center flex-col space-y-20  w-[60vw]">
        <div className="absolute inset-0 w-full h-full"></div>
        <div className="relative z-10 text-center">
          <h1 className="ab font-bold text-8xl text-[#16468F]">
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[0] = el)}
            >
              R
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[1] = el)}
            >
              o
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[2] = el)}
            >
              t
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[3] = el)}
            >
              a
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[4] = el)}
            >
              r
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[5] = el)}
            >
              y
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[6] = el)}
            >
              {" "}
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[7] = el)}
            >
              C
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[8] = el)}
            >
              l
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[9] = el)}
            >
              u
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[10] = el)}
            >
              b
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[11] = el)}
            >
              {" "}
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[12] = el)}
            >
              W
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[13] = el)}
            >
              e
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[14] = el)}
            >
              l
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[15] = el)}
            >
              c
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[16] = el)}
            >
              o
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[17] = el)}
            >
              m
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[18] = el)}
            >
              e
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[19] = el)}
            >
              '
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[20] = el)}
            >
              s
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[21] = el)}
            >
              {" "}
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[22] = el)}
            >
              Y
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[23] = el)}
            >
              o
            </span>
            <span
              className="h opacity-0"
              ref={(el) => (lettersRef.current[24] = el)}
            >
              u
            </span>
          </h1>
        </div>
        <div className="main-div relative z-10 text-center">
          <p className="font-bold text-[80px] text-[#E3AE23]">
            Conference 2024
          </p>
          <p className="font-bold text-6xl text- text-[#16468F]">
            Let's Go Dubai
          </p>

          <div className="mt-[10vh]">
            <Link href="/V1/SignUpPage">
              <button
                ref={buttonRef}
                className="zoom-button px-[3vw] py-[2vh] rounded-full bg-gradient-to-r from-[#18458D] via-[#65529D] to-[#AB67A9] text-white font-[600] text-[20px]  shadow-[#65529D] shadow-md"
              >
                Get Started
              </button>
            </Link>
            <p className="mt-[4vh] text-[20px] font-[500]">
              Already Have an Account?{" "}
              <Link href="/V1/SignInPage">
                <span className=" hover:underline cursor-pointer hover:text-blue-500 ">
                  Log In
                </span>
              </Link>
            </p>
            {/* <PhoneVerification /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
