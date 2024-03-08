import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modalFlightsHelper.css"; // Import your CSS file
import passPortImg from "@/public/passport.png";
import Image from "next/image";
import { homePageStyles } from "@/app/Styles/HomePageStyles";
import vistaraImg from "@/public/vistara.jpeg";
const FlightTickets = ({
  isOpen,
  onClose,
  status = "applied",
  currentStage = "Processing",
}) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const downloadTicket = () => {
    // Logic for downloading ticket
  };
  return (
    <div className="modala" style={modalStyle}>
      <div className="modal-contenta">
        <span className="closea" onClick={onClose}>
          &times;
        </span>

        <h2 className="text-[35px] font-[800]">Flight Details</h2>
        <div className="mt-[30px]">
          <h1 className="text-[25px] font-[700]">Arrival Flight :</h1>
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col justify-center ">
              <p className="flex items-center gap-[5px]">
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
            <div className="h-[60px] w-[2px] bg-black"></div>
            <div className="flex justify-center gap-[25px] items-center">
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
            <div className="h-[60px] w-[2px] bg-black"></div>

            <div className="flex gap-[15vw] items-center ">
              {" "}
              <button className="btn w-auto h-[6vh]" onClick={downloadTicket}>
                Download Flight Ticket
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[40px]">
          <h1 className="text-[25px] font-[700]">Departing Flight :</h1>
          <div className="flex justify-between mt-[10px]">
            <div className="flex flex-col justify-center ">
              <p className="flex items-center gap-[5px]">
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
            <div className="h-[60px] w-[2px] bg-black"></div>
            <div className="flex justify-center gap-[25px] items-center">
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
            <div className="h-[60px] w-[2px] bg-black"></div>
            <div className="flex gap-[15vw] items-center ">
              <button className="btn w-auto h-[6vh]" onClick={downloadTicket}>
                Download Flight Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FlightTickets.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default FlightTickets;
