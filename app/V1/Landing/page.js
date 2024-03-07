"use client";

import { PhoneVerification } from "@/components/Landing/PhoneVerification/PhoneVerification";

export default function Landing() {
  return (
    <section className="h-[100vh] w-[100vw] flex items-center flex-col space-y-10">
      <div>
        <p className="font-[700] text-[120px]">Welcome To Rotary</p>
      </div>
      <div>
        <p className="font-[700] text-[80px]">Dubai Conference - 123</p>
      </div>
      <div>
        <PhoneVerification />
      </div>
    </section>
  );
}
