import React, { useState } from "react";

export default function VisaApplicationForm() {
  const [formData, setFormData] = useState({
    proofOfIdentity: "",
    proofOfAddress: "",
    dateOfBirth: "",
    passportSizePhotos: "",
    applicationForm: "",
    feePayment: "",
    additionalDocuments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mb-4 w-auto">
      <div className="border-gray border-2 rounded-[20px] ">
        <div className="h-[5vh] bg-[#F3F4F6] flex items-center rounded-tr-[20px] rounded-tl-[20px] w-full px-[25px] pt-[5px]">
          <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        </div>
        <div className="grid grid-cols-3 w-full mt-[2vh] px-[20px] space-x-5">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfIdentity"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              id="proofOfIdentity"
              name="proofOfIdentity"
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfIdentity"
            >
              Gender:
            </label>
            <select
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              name="gender"
              value="{formData.gender}"
              onChange={(event) => {
                {
                  handleChange;
                }
              }}
              required
            >
              <option value={true}>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
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
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
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
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
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
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfIdentity"
            >
              Nationality
            </label>
            <input
              type="text"
              placeholder="Enter Your Nationality"
              id="proofOfIdentity"
              name="proofOfIdentity"
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfAddress"
            >
              Proof of Address:
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              id="proofOfAddress"
              name="proofOfAddress"
              value={formData.proofOfAddress}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
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
              onChange={(event) => {
                {
                  handleChange;
                }
              }}
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
          <div className="mb-4">
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
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="border-gray border-2 rounded-[20px] mt-[4vh]">
        <div className="h-[5vh] bg-[#F3F4F6] flex items-center rounded-tr-[20px] rounded-tl-[20px] w-full px-[25px] pt-[5px]">
          <h2 className="text-lg font-semibold mb-2">Passport Information</h2>
        </div>
        <div className="grid grid-cols-3 w-full mt-[2vh] px-[20px] space-x-5">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfIdentity"
            >
              Passport Number:
            </label>
            <input
              type="text"
              placeholder="Enter Passport Number"
              id="proofOfIdentity"
              name="proofOfIdentity"
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Expiration Date:
            </label>
            <input
              type="date"
              name="expirationDate"
              // value={passportData.expirationDate}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfIdentity"
            >
              Issuing Country:
            </label>
            <input
              type="text"
              placeholder="Enter Issuing Country"
              id="proofOfIdentity"
              name="proofOfIdentity"
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfAddress"
            >
              Proof of Address:
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              id="proofOfAddress"
              name="proofOfAddress"
              value={formData.proofOfAddress}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="border-gray border-2 rounded-[20px] mt-[4vh]">
        <div className="h-[5vh] bg-[#F3F4F6] flex items-center rounded-tr-[20px] rounded-tl-[20px] w-full px-[25px] pt-[5px]">
          <h2 className="text-lg font-semibold mb-2">Travel Information</h2>
        </div>
        <div className="grid grid-cols-3 w-full mt-[2vh] px-[20px] space-x-5">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfIdentity"
            >
              Purpose of Visit
            </label>
            <input
              type="text"
              placeholder="Enter Purpose of Visit"
              id="proofOfIdentity"
              name="proofOfIdentity"
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Intended Duration of Stay
            </label>
            <input
              type="text"
              placeholder="Enter Duration of Stay"
              name="expirationDate"
              // value={passportData.expirationDate}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Proposed Date of Entry:
            </label>
            <input
              type="date"
              placeholder="Enter Purposed Date of Entry"
              name="expirationDate"
              // value={passportData.expirationDate}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Proposed Date of Exit:
            </label>
            <input
              type="date"
              placeholder="Enter Proposed Date of Exit"
              name="expirationDate"
              // value={passportData.expirationDate}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proofOfIdentity"
            >
              Details of Accomodation in Dubai:
            </label>
            <input
              type="text"
              placeholder="Enter Details of Accomodation"
              id="proofOfIdentity"
              name="proofOfIdentity"
              value={formData.proofOfIdentity}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
