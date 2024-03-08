"use client";
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

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenFlights, setModalOpenFlights] = useState(false);
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
  const closeModalVisa = () => {
    setModalOpenVisa(false);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const closeModalFlights = () => {
    setModalOpenFlights(false);
  };
  return (
    <>
      <NavBar />
      <section className="w-[100vw] h-[100vh] flex ">
        <div className="w-[20vw] h-[100vh] bg-gray-100 text-blue-950 sticky">
          <section className="flex justify-center items-center h-full">
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
              <button className="btn">Q&A</button>
            </section>
          </section>
        </div>

        <div className="w-[57vw] h-[100vh] overflow-y-auto  bg-[#F4F5F6] scrollbar-hidden py-[1vh]">
          <section className="flex justify-center items-center h-auto">
            <section className="flex rounded-[20px] bg-white flex-col items-center h-auto w-[95%] border-[2px] py-[3vh]  gap-11 ">
              <InfoCard />
              <FeedSection />
            </section>
          </section>
        </div>
        <div className="w-[23vw] h-[100vh] bg-[#F4F5F6]">
          <RightSideDiv />
        </div>
      </section>
    </>
  );
}
