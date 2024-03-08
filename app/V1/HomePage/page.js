// pages/index.js

import { FeedSection } from "@/components/HomePage/FeedSection/FeedSection";
import { InfoCard } from "@/components/HomePage/InfoCard/InfoCard";
import { NavBar } from "@/components/NavBar/NavBar";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <section className="w-[100vw] h-[100vh] flex ">
        <div className="w-[20vw] h-[100vh] bg-[#DAFCFF]  text-blue-950 sticky">
  <div className="mb-7">
    <button className="mt-[40px] block ml-4 font-[600] border-b border-gray-400 ">Flight Tickets</button>
  </div>
  <div className="mb-7">
    <button className="block ml-4 font-[600] border-b border-gray-400">Track Passport Application Status</button>
  </div>
  <div className="mb-7">
    <button className="block ml-4 font-[600] border-b border-gray-400">Track visa Application Status</button>
  </div>
  <div>
    <button className="block ml-4 font-[600] border-b border-gray-400">Q&A</button>
  </div>
</div>
        <div className="w-[60vw] h-[100vh] overflow-y-auto">
          <InfoCard />
          <FeedSection />
        </div>
        <div className="w-[20vw] h-[100vh] bg-[#DAFCFF]"></div>
      </section>
    </>
  );
}
