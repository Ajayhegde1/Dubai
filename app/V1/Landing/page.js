"use client";

import { PhoneVerification } from "@/components/Landing/PhoneVerification/PhoneVerification";

export default function Landing() {
  return (
    <section className="h-[100vh] w-[100vw] flex items-center flex-col space-y-20">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover fixed inset-0 z-0"
          autoPlay
          loop
          muted
          style={{ filter: "brightness(0.4)" }}
        >
          <source src="/dubai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="font-bold text-8xl text-white">Welcome To Rotary</h1>
      </div>
      <div className="relative z-10 text-center">
        <p className="font-bold text-6xl text-white ">Dubai Conference - 123</p>
        <div className="mt-[10vh]">
          <PhoneVerification />
        </div>
      </div>
    </section>
  );
}
