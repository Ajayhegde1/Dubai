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
        <div className="w-[20vw] h-[100vh] bg-red-500 sticky"></div>
        <div className="w-[60vw] h-[100vh] overflow-y-auto">
          <InfoCard />
          <FeedSection />
        </div>
        <div className="w-[20vw] h-[100vh] bg-gray-500"></div>
      </section>
    </>
  );
}
