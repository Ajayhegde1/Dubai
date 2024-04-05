"use client";
import Link from "next/link";
import { useState } from "react";

export function HeroComponent() {
  const [budget, setBudget] = useState(5000);

  // Function to handle budget change
  const handleBudgetChange = (event) => {
    setBudget(parseInt(event.target.value));
  };

  return (
    <section className="container mx-auto py-8">
      <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-100 px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800">
            Registration - User Details
          </h1>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="proofOfIdentity"
                >
                  Full Name
                </label>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-[1vw]">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Middle Name"
                    id="middleName"
                    name="middleName"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-[1vw]">
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="proofOfIdentity"
                  >
                    Gender:
                  </label>
                  <select
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="gender"
                    required
                  >
                    <option value={true}>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="proofOfIdentity"
                  >
                    Contact No.:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Contact Number"
                    id="proofOfIdentity"
                    name="proofOfIdentity"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="dateOfBirth"
                  >
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-[1vw]">
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="proofOfIdentity"
                  >
                    Place Of Birth:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Place of Birth"
                    id="proofOfIdentity"
                    name="proofOfIdentity"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="proofOfIdentity"
                  >
                    Marital Status:
                  </label>
                  <select
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="gender"
                    value="{formData.gender}"
                    required
                  >
                    <>
                      <option value={true}>Select Marital Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </>
                  </select>
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="proofOfIdentity"
                  >
                    Occupation / Profession:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Occupation"
                    id="proofOfIdentity"
                    name="proofOfIdentity"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  id="streetAddress"
                  name="streetAddress"
                  className="block w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    id="city"
                    name="city"
                    className="block w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    id="state"
                    name="state"
                    className="block w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Pin Code"
                    id="pinCode"
                    name="pinCode"
                    className="block w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    id="country"
                    name="country"
                    className="block w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="proofOfIdentity"
                >
                  Rotary Details
                </label>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 grid-cols-1 gap-[1vw]">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Rotary ID"
                    id="firstName"
                    name="firstName"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Rotary Club Name"
                    id="middleName"
                    name="middleName"
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Rotary District Name"
                    id="lastName"
                    name="lastName"
                    className="block w-full   px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <select
                    id="role"
                    name="role"
                    className="block w-full   px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      Select Role
                    </option>
                    <option value="Member">Member</option>
                    <option value="Officer">Officer</option>
                    <option value="Chairperson">Chairperson</option>
                    <option value="President">President</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="address"
                >
                  Accommodation Requirements:
                </label>

                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 grid-cols-1 gap-[1vw]">
                  <div className="mb-4">
                    <select
                      id="role"
                      name="role"
                      className="block w-full  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="" disabled selected>
                        Select Type
                      </option>
                      <option value="hotel">Hotel</option>
                      <option value="villa">Villa</option>
                      <option value="serviceApt">Service Apartment</option>
                      <option value="guestHouse">Guest House</option>
                      <option value="resort">Resort</option>
                      <option value="hostel">Hostel</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Preferred Locality"
                      id="city"
                      name="city"
                      className="block w-full  px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      type="text"
                      placeholder="Additional Preferences"
                      id="state"
                      name="state"
                      className="block w-full h-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4 border py-[2vh] px-[1vw] rounded-md h-full">
                    <label
                      htmlFor="budget"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Budget(Per Night):
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      value={budget}
                      onChange={handleBudgetChange}
                      className="w-full"
                      id="budget"
                    />
                    <div className="flex justify-between mt-2">
                      <span>0 INR</span>
                      <span>10,000 INR +</span>
                    </div>
                    <p className="mt-2">
                      Selected Budget:{" "}
                      <span className="text-blue-500 font-bold">
                        {budget} INR
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/V1/PassPortInfoPage">
            <button className="bg-[#14A800] lg:px-[1vw] md:px-[1vw] xl:px-[1vw] 2xl:px-[1vw] px-[4vw]  py-[1vh] rounded-full text-white font-[700] mt-[2vh] lg:mt-[1vh] md:mt-[1vh] xl:mt-[1vh] 2xl:mt-[1vh]">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
