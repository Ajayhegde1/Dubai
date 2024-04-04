"use client";
import ApplySuccessScreen from "@/components/VisaportInfoPage/ApplySuccessScreen/ApplySuccessScreen";
import PassportApplicationForm from "@/components/VisaportInfoPage/VisaApplicationForm/VisaApplicationForm";
import SuccessScreen from "@/components/SuccessScreen/SuccessScreen";
import { useState } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import VisaApplicationForm from "@/components/VisaportInfoPage/VisaApplicationForm/VisaApplicationForm";

export default function VisaPortInfoPage() {
  const [hasPassport, setHasPassport] = useState(null);
  const [step, setStep] = useState(1);
  const [passportData, setPassportData] = useState({
    passportNumber: "",
    nationality: "",
    expirationDate: "",
    issuingCountry: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    placeOfBirth: "",
  });
  const [saved, setSaved] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassportData({
      ...passportData,
      [name]: value,
    });
  };

  const handleHasPassportChange = (e) => {
    setHasPassport(e.target.value === "yes");
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleApply = () => {
    setStep(5);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSaveDetails = () => {
    setSaved(true);
  };
  if (saved) {
    return <SuccessScreen />;
  }
  return (
    <>
      <NavBar />
      <section className="container mx-auto py-8">
        <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-100 px-6 py-4">
            <h1 className="text-xl font-bold text-gray-800">
              Visa Information
            </h1>
          </div>
          <div className="p-6">
            {step === 1 && (
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Do you have a Visa?
                </label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="hasPassport"
                      value="yes"
                      checked={hasPassport === true}
                      onChange={handleHasPassportChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="hasPassport"
                      value="no"
                      checked={hasPassport === false}
                      onChange={handleHasPassportChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                {hasPassport ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Full Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        name="passportNumber"
                        value={passportData.passportNumber}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Nationality:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Nationality"
                        name="nationality"
                        value={passportData.nationality}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Passport Information:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Passport Info"
                        name="expirationDate"
                        value={passportData.expirationDate}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Purpose of Visit:
                      </label>
                      <input
                        type="text"
                        placeholder="What is your purpose of visit"
                        name="issuingCountry"
                        value={passportData.issuingCountry}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Visa Number:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Visa Number"
                        name="fullName"
                        value={passportData.fullName}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Date of Birth:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter DOB"
                        name="dateOfBirth"
                        value={passportData.dateOfBirth}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Gender:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Gender"
                        name="gender"
                        value={passportData.gender}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Place of Birth:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Place of Birth"
                        name="placeOfBirth"
                        value={passportData.placeOfBirth}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                ) : (
                  <VisaApplicationForm />
                )}
              </div>
            )}
            <div className="flex justify-between">
              {step > 1 && step != 3 && step != 5 && (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handlePreviousStep}
                >
                  Previous
                </button>
              )}
              {step === 1 && (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              )}
              {step === 2 && (
                <>
                  {hasPassport ? (
                    <button
                      onClick={handleNextStep}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={handleApply}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Apply
                    </button>
                  )}
                </>
              )}
              {step === 3 && (
                <>
                  <SuccessScreen routing="/V1/FlightBookingPage" />
                </>
              )}
              {step === 5 && (
                <>
                  <ApplySuccessScreen />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
