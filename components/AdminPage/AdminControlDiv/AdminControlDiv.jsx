"use client";
import React, { useState } from "react";
import { Button, Modal, Checkbox } from "antd";
// import "antd/dist/antd.css";

export default function AdminControlDiv() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirmationOk = () => {
    setIsConfirmationModalOpen(false);
    setConfirmLoading(true);
    setModalText("The modal will be closed after two seconds");
    setTimeout(() => {
      setOpen(false);
      //   setIsConfirmationModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleConfirmationCancel = () => {
    setIsConfirmationModalOpen(false);
  };

  const [registrationEnabled, setRegistrationEnabled] = useState(false);
  const [passportEnabled, setPassportEnabled] = useState(false);
  const [visaEnabled, setVisaEnabled] = useState(false);
  const [flightBookingEnabled, setFlightBookingEnabled] = useState(false);
  const [stayBookingEnabled, setStayBookingEnabled] = useState(false);
  const [feedEnabled, setFeedEnabled] = useState(false);
  const [adEnabled, setAdEnabled] = useState(false);

  return (
    <section className="w-[100vw] flex justify-center mt-[5vh]">
      <div className="w-[90%]">
        <Button
          style={{
            height: "5vh",
            fontSize: "16px",
            backgroundColor: "red",
            fontWeight: "600",
          }}
          type="primary"
          onClick={showModal}
        >
          Admin Control
        </Button>
        <Modal
          title="Admin Control - Modules"
          visible={open}
          onOk={handleOk}
          onCancel={handleCancel}
          confirmLoading={confirmLoading}
        >
          <div className="w-full p-4">
            <div className="flex flex-col space-y-4">
              <Checkbox
                checked={registrationEnabled}
                onChange={() => setRegistrationEnabled(!registrationEnabled)}
              >
                Registration Module
              </Checkbox>
              <Checkbox
                checked={passportEnabled}
                onChange={() => setPassportEnabled(!passportEnabled)}
              >
                Passport Module
              </Checkbox>
              <Checkbox
                checked={visaEnabled}
                onChange={() => setVisaEnabled(!visaEnabled)}
              >
                Visa Module
              </Checkbox>
              <Checkbox
                checked={flightBookingEnabled}
                onChange={() => setFlightBookingEnabled(!flightBookingEnabled)}
              >
                Flight Booking Module
              </Checkbox>
              <Checkbox
                checked={stayBookingEnabled}
                onChange={() => setStayBookingEnabled(!stayBookingEnabled)}
              >
                Stay Booking Module
              </Checkbox>
              <Checkbox
                checked={feedEnabled}
                onChange={() => setFeedEnabled(!feedEnabled)}
              >
                Feed Module
              </Checkbox>
              <Checkbox
                checked={adEnabled}
                onChange={() => setAdEnabled(!adEnabled)}
              >
                Ad Module
              </Checkbox>
              <p className="text-gray-600 mt-4">
                Note: Enabling or disabling any module will affect all users.
              </p>
            </div>
          </div>
        </Modal>
        <Modal
          title="Confirmation"
          visible={isConfirmationModalOpen}
          onOk={handleConfirmationOk}
          onCancel={handleConfirmationCancel}
        >
          <p>Are you sure you want to save changes?</p>
        </Modal>
      </div>
    </section>
  );
}
