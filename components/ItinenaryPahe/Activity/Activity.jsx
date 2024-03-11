import React, { useState } from "react";
import "./helperActivity.css";
import { homePageStyles } from "@/app/Styles/HomePageStyles";
import burjImg from "@/public/burj.jpeg";
import safariImg from "@/public/safari.jpg";
import mallImg from "@/public/mall.jpeg";
import conferenceImg from "@/public/conference.jpeg";
import flightArrivalImg from "@/public/flight_arrival.png";
import flightDepartureImg from "@/public/flight_departure.png";
import Image from "next/image";

const Activity = () => {
  const [days, setDays] = useState([
    {
      day: "Day 1",
      activities: [
        "Arrival",
        "Visit Burj Khalifa",
        "Desert Safari",
        "Dubai Mall",
      ],
      accommodations: [],
      transportation: "",
    },
    {
      day: "Day 2",
      activities: ["Conference"],
      accommodations: [],
      transportation: "",
    },
    {
      day: "Day 3",
      activities: ["Conference", "Departure"],
      accommodations: [],
      transportation: "",
    },
    // Add more days as needed
  ]);

  const [activeDay, setActiveDay] = useState(0);
  const [newActivity, setNewActivity] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddActivity = () => {
    setShowInput(true);
  };

  const addNewActivity = () => {
    const updatedDays = [...days];
    updatedDays[0].activities.push(newActivity); // Push new activity to Day 1
    setDays(updatedDays);
    setShowInput(false); // Hide input box after adding activity
    setNewActivity(""); // Clear input box
  };

  return (
    <div className="day-planning-page">
      <div className="tabs">
        {days.map((day, index) => (
          <div
            key={index}
            className={index === activeDay ? "tab active-tab" : "tab"}
            onClick={() => setActiveDay(index)}
          >
            {day.day}
          </div>
        ))}
      </div>
      <div className="content">
        <div className="planning-section">
          <h3 className={`${homePageStyles.flightsModalStyle}`}>Activities</h3>
          <div className="flex flex-col gap-4">
            {days[activeDay].activities.map((activity, idx) => (
              <div key={idx} className="flex items-center">
                <Image
                  src={
                    activeDay === 0
                      ? idx === 0
                        ? flightArrivalImg
                        : idx === 1
                        ? burjImg
                        : idx === 2
                        ? safariImg
                        : idx === 3
                        ? mallImg
                        : burjImg
                      : activeDay === 1 && idx === 0
                      ? conferenceImg
                      : activeDay === 2 && idx === 0
                      ? conferenceImg
                      : activeDay === 0 && idx === 4
                      ? flightDepartureImg
                      : flightDepartureImg
                  }
                  alt={activity}
                  className="w-[5vw] h-[5vw] rounded-full mr-4"
                />

                <div className="content">
                  <h4 className="text-[20px] font-[600]">{activity}</h4>
                  <p className="">
                    {activeDay === 0
                      ? idx === 0
                        ? "Arrive at Dubai"
                        : idx === 1
                        ? "Experience the breathtaking views from the world's tallest building."
                        : idx === 2
                        ? "Enjoy thrilling dune bashing, camel rides, and traditional entertainment."
                        : "Shop at one of the world's largest malls with numerous entertainment options."
                      : activeDay === 1 || activeDay === 2
                      ? "Participate in an informative conference session."
                      : idx === 0
                      ? "Depart from your destination city."
                      : "Activity Added"}
                  </p>
                </div>
              </div>
            ))}
            {showInput && (
              <div className="flex items-center">
                <input
                  type="text"
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  placeholder="Enter activity"
                />
                <button onClick={addNewActivity}>Add</button>
              </div>
            )}
          </div>
          <button onClick={handleAddActivity}>Add Activity</button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
