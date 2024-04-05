"use client";
import FAQ from "@/components/HomePage/FAQ/FAQ";
import "./helper.css";
import { FeedSection } from "@/components/HomePage/FeedSection/FeedSection";
import FlightTickets from "@/components/HomePage/FlightTickets/FlightTickets";
import { InfoCard } from "@/components/HomePage/InfoCard/InfoCard";
import PassportApplicationStatus from "@/components/HomePage/PassportApplicationStatus/PassportApplicationStatus";
import { RightSideDiv } from "@/components/HomePage/RightSideDiv/RightSideDiv";
import VisaApplicationStatus from "@/components/HomePage/VisaApplcationStatus/VisaApplicationStatus";
import { NavBar } from "@/components/NavBar/NavBar";
import VisaApplicationForm from "@/components/VisaportInfoPage/VisaApplicationForm/VisaApplicationForm";
import Head from "next/head";
import { useState } from "react";
import ContactSupport from "@/components/ContactSupport/ContactSupport";
import rotaryImg from "@/public/rotary.png";
import Image from "next/image";
export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenFlights, setModalOpenFlights] = useState(false);
  const [modalOpenFAQ, setModalOpenFAQ] = useState(false);
  const [modalOpenVisa, setModalOpenVisa] = useState(false);
  const [status, setStatus] = useState("Processing");
  const [statusVisa, setStatusVisa] = useState("Document Verification");

  const openModal = () => {
    setModalOpen(true);
  };
  const openModalFlights = () => {
    setModalOpenFlights(true);
  };
  const openModalVisa = () => {
    setModalOpenVisa(true);
  };
  const openModalFAQ = () => {
    setModalOpenFAQ(true);
  };
  const closeModalVisa = () => {
    setModalOpenVisa(false);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const closeModalFlights = () => {
    setModalOpenFlights(false);
  };
  const closeModalFAQ = () => {
    setModalOpenFAQ(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMenuStopWatchOpen, SetIsMenuStopWatchOpen] = useState(false);

  const toggleMenuStopWatch = () => {
    SetIsMenuStopWatchOpen(!isMenuStopWatchOpen);
  };
  return (
    <section className="overflow-hidden h-[100vh]">
      <section className="w-full h-auto z-50 flex justify-center py-[10px]">
        <div className="md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] w-[100%] md:px-0 lg:px-0 xl:px-0 2xl:px-0 px-[2vw] flex justify-between items-center">
          <div className="flex gap-[10px]">
            <button
              className="lg:hidden md:hidden xl:hidden 2xl:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <Image
              className="lg:w-[16vw] md:w-[16vw] xl:w-[16vw] 2xl:w-[16vw] w-[50vw]"
              src={rotaryImg}
            />
          </div>
          <div>
            {" "}
            <button
              className="lg:hidden md:hidden xl:hidden 2xl:hidden mt-2"
              onClick={toggleMenuStopWatch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 6a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm10-2H5a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zM7 10a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* <NavBar /> */}
      <section className="w-[100vw] h-[100vh] flex">
        <div
          className={`lg:w-[20vw] md:w-[20vw] ${
            isMenuOpen ? "opacity-100 w-full" : "opacity-0 w-0"
          } xl:w-[20vw] 2xl:w-[20vw]  w-full lg:opacity-100 md:opacity-100 xl:opacity-100 2xl:opacity-100  h-[100vh] bg-gray-100 text-blue-950 lg:sticky md:sticky xl:sticky 2xl:sticky absolute z-50`}
        >
          <section className="flex justify-center items-center h-[88vh]">
            <section className="flex flex-col  rounded-lg bg-white border-2 border-gray-300 p-8 space-y-8  h-[98%] w-[95%]">
              <button onClick={openModalFlights} className="btn">
                Flight Tickets
              </button>
              <FlightTickets
                isOpen={modalOpenFlights}
                onClose={closeModalFlights}
              />
              <button onClick={openModal} className="btn">
                Track Passport Application Status
              </button>
              <PassportApplicationStatus
                isOpen={modalOpen}
                onClose={closeModal}
                status={status}
              />
              <button onClick={openModalVisa} className="btn">
                Track Visa Application Status
              </button>
              <VisaApplicationStatus
                isOpen={modalOpenVisa}
                onClose={closeModalVisa}
                status={statusVisa}
              />
              <button onClick={openModalFAQ} className="btn">
                Q&A
              </button>
              <FAQ isOpen={modalOpenFAQ} onClose={closeModalFAQ} />
            </section>
          </section>
        </div>

        <div className=" feed-sec lg:w-[57vw] md:w-[57vw] xl:w-[57vw] 2xl:w-[57vw] w-full h-[100vh] overflow-y-auto  bg-[#F4F5F6] scrollbar-hidden py-[1vh]">
          <section className="flex justify-center items-center h-auto">
            <section className="flex rounded-[20px] bg-white flex-col items-center h-auto w-[95%] border-[2px] py-[3vh]  gap-11 ">
              <InfoCard />
              <FeedSection />
            </section>
          </section>
        </div>
        <div
          className={`lg:w-[23vw] md:w-[23vw] ${
            isMenuStopWatchOpen ? "opacity-100 w-full" : "opacity-0 w-0"
          }  xl:w-[23vw] 2xl:w-[23vw] h-[100vh] bg-[#F4F5F6]  lg:opacity-100 md:opacity-100 xl:opacity-100 2xl:opacity-100 lg:relative md:relative xl:relative 2xl:relative absolute`}
        >
          <RightSideDiv />
        </div>
        {/* <ContactSupport /> */}
      </section>
    </section>
  );
}
