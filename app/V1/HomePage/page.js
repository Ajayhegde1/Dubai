"use client";

import { FeedSection } from "@/components/HomePage/FeedSection/FeedSection";
import { InfoCard } from "@/components/HomePage/InfoCard/InfoCard";
import { RightSideDiv } from "@/components/HomePage/RightSideDiv/RightSideDiv";
import { NavBar } from "@/components/NavBar/NavBar";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      {/* <NavBar /> */}
      <section className="w-[100vw] h-[100vh] flex ">
        <div className="w-[20vw] h-[100vh] bg-red-500 sticky">
          <div className="h-[20vh] bg-slate-300"></div>
          <div className="h-[80vh] bg-blue-500"></div>
        </div>
        <div className="w-[60vw] h-[100vh] overflow-y-auto">
          <InfoCard />
          <FeedSection />
        </div>
        <div className="w-[20vw] h-[100vh] bg-gray-500">
          {" "}
          <RightSideDiv />
        </div>
      </section>
    </>
  );
}
