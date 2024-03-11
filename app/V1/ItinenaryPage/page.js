"use client";
import React from "react";
import "./helper.css";
import "@/components/HomePage/FlightTickets/modalFlightsHelper.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { itineraryStyles } from "@/app/Styles/ItinenaryStyles";
import vistaraImg from "@/public/vistara.jpeg";
import Image from "next/image";
import { homePageStyles } from "@/app/Styles/HomePageStyles";
import lodgeImg from "@/public/accomodation.png";
const AccommodationItem = ({ name, address, checkIn, checkOut }) => {
  const flightDetailsArrv = {
    airLine: "Vistara",
    departureTime: "09:00 AM",
    arrivalTime: "12:00 PM",
    flightPRNNumber: "EJ1J123",
  };
  const flightDetailsDept = {
    airLine: "Vistara",
    departureTime: "10:30 PM",
    arrivalTime: "03:00 AM",
    flightPRNNumber: "QHUP13",
  };
  const downloadTicket = () => {
    // Logic for downloading ticket
  };

  return (
    <div className="mt-[10px] mb-[20px] w-[50%]">
      <h1 className="text-[25px] font-[700]">Departing Flight :</h1>
      <div className="flex h-[25vh] justify-between mt-[10px] border-[1px] border-gray-300 rounded-xl p-[25px] items-center w-[80%] shadow-xl">
        <div className="flex flex-col justify-center ">
          <p className=" items-center gap-[5px]">
            <span
              className={`${homePageStyles.flightsModalTextStyle} text-[20px]`}
            >
              {name}
            </span>
            <span className={`${homePageStyles.flightsModalTextStyle}`}>
              <Image
                className="rounded-[10px]"
                height={70}
                width={70}
                src={lodgeImg}
              />
            </span>
          </p>
        </div>
        <div className="h-[90px] w-[2px] bg-black"></div>
        <div className=" justify-center gap-[25px] items-center">
          <p>
            <span className={`${homePageStyles.flightsModalStyle}`}>
              Address:{" "}
            </span>
            <span className={`${homePageStyles.flightsModalTextStyle}`}>
              {address}
            </span>
          </p>

          <p>
            <span className={`${homePageStyles.flightsModalStyle}`}>
              Check-in:{" "}
            </span>
            <span className={`${homePageStyles.flightsModalTextStyle}`}>
              {checkIn}
            </span>
          </p>

          <p>
            <span className={`${homePageStyles.flightsModalStyle}`}>
              Check-out:{" "}
            </span>
            <span className={`${homePageStyles.flightsModalTextStyle}`}>
              {checkOut}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const FlightItem = ({ airline, flightNumber, departure, arrival }) => {
  return (
    <div className="flight-item">
      <h3>
        {airline} - {flightNumber}
      </h3>
      <p>Departure: {departure}</p>
      <p>Arrival: {arrival}</p>
    </div>
  );
};

const ActivityItem = ({ name, date, time, location }) => {
  return (
    <div className="activity-item">
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const ItineraryPage = () => {
  const flightDetailsArrv = {
    airLine: "Vistara",
    departureTime: "09:00 AM",
    arrivalTime: "12:00 PM",
    flightPRNNumber: "EJ1J123",
  };
  const flightDetailsDept = {
    airLine: "Vistara",
    departureTime: "10:30 PM",
    arrivalTime: "03:00 AM",
    flightPRNNumber: "QHUP13",
  };
  const downloadTicket = () => {
    // Logic for downloading ticket
  };
  return (
    <section className="w-[100vw] h-[100vh]">
      <NavBar />
      <div className="px-[10vw] mt-[40px] w-[90vw]">
        <h2 className="text-[30px] font-[700] text-blue-900">Itinerary</h2>
        <div className="accommodations">
          <h3 className={`${itineraryStyles.subHeadText}`}>Accommodations</h3>
          <AccommodationItem
            name="Hotel ABC"
            address="123 Main Street, City, Country"
            checkIn="2024-03-15"
            checkOut="2024-03-20"
          />
          {/* More AccommodationItems can be added here */}
        </div>
        <div className="flights">
          <h3 className={`${itineraryStyles.subHeadText}`}>Flights</h3>
          <div className="flex">
            <div className="mt-[30px] w-[50%]">
              <h1 className="text-[25px] font-[700]">Arrival Flight :</h1>
              <div className="flex h-[25vh] justify-between mt-[10px] border-[1px] border-gray-300 rounded-xl p-[25px] items-center w-[80%] shadow-xl">
                <div className="flex flex-col justify-center ">
                  <p className="items-center gap-[5px]">
                    <span
                      className={`${homePageStyles.flightsModalTextStyle} text-[20px]`}
                    >
                      {flightDetailsArrv.airLine}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      <Image
                        className="rounded-[10px]"
                        height={70}
                        width={70}
                        src={vistaraImg}
                      />
                    </span>
                  </p>
                </div>
                <div className="h-[90px] w-[2px] bg-black"></div>
                <div className=" justify-center gap-[25px] items-center">
                  <p>
                    <span className={`${homePageStyles.flightsModalStyle}`}>
                      Departure Time:{" "}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      {flightDetailsArrv.departureTime}
                    </span>
                  </p>

                  <p>
                    <span className={`${homePageStyles.flightsModalStyle}`}>
                      Arrival Time:{" "}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      {flightDetailsArrv.arrivalTime}
                    </span>
                  </p>

                  <p>
                    <span className={`${homePageStyles.flightsModalStyle}`}>
                      Flight PRN Number:{" "}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      {flightDetailsArrv.flightPRNNumber}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[40px] w-[50%]">
              <h1 className="text-[25px] font-[700]">Departing Flight :</h1>
              <div className="flex h-[25vh] justify-between mt-[10px] border-[1px] border-gray-300 rounded-xl p-[25px] items-center w-[80%] shadow-xl">
                <div className="flex flex-col justify-center ">
                  <p className=" items-center gap-[5px]">
                    <span
                      className={`${homePageStyles.flightsModalTextStyle} text-[20px]`}
                    >
                      {flightDetailsDept.airLine}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      <Image
                        className="rounded-[10px]"
                        height={70}
                        width={70}
                        src={vistaraImg}
                      />
                    </span>
                  </p>
                </div>
                <div className="h-[90px] w-[2px] bg-black"></div>
                <div className=" justify-center gap-[25px] items-center">
                  <p>
                    <span className={`${homePageStyles.flightsModalStyle}`}>
                      Departure Time:{" "}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      {flightDetailsDept.departureTime}
                    </span>
                  </p>

                  <p>
                    <span className={`${homePageStyles.flightsModalStyle}`}>
                      Arrival Time:{" "}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      {flightDetailsDept.arrivalTime}
                    </span>
                  </p>

                  <p>
                    <span className={`${homePageStyles.flightsModalStyle}`}>
                      Flight PRN Number:{" "}
                    </span>
                    <span className={`${homePageStyles.flightsModalTextStyle}`}>
                      {flightDetailsDept.flightPRNNumber}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <FlightItem
            airline="Airline XYZ"
            flightNumber="XYZ123"
            departure="2024-03-14 08:00 AM"
            arrival="2024-03-14 10:00 AM"
          /> */}
          {/* More FlightItems can be added here */}
        </div>
        <div className="activities">
          <h3 className={`${itineraryStyles.subHeadText}`}>Activities</h3>
          <ActivityItem
            name="Sightseeing Tour"
            date="2024-03-16"
            time="09:00 AM"
            location="City Center"
          />
          {/* More ActivityItems can be added here */}
        </div>
      </div>
    </section>
  );
};

export default ItineraryPage;
