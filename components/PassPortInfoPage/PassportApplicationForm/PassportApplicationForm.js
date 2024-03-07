import React, { useState } from "react";

export default function PassportApplicationForm() {
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
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">
        Indian Passport Application
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="proofOfIdentity"
        >
          Proof of Identity:
        </label>
        <input
          type="text"
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
          htmlFor="passportSizePhotos"
        >
          Passport Size Photographs:
        </label>
        <input
          type="file"
          id="passportSizePhotos"
          name="passportSizePhotos"
          onChange={handleChange}
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="applicationForm"
        >
          Application Form:
        </label>
        <input
          type="file"
          id="applicationForm"
          name="applicationForm"
          onChange={handleChange}
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="feePayment"
        >
          Fee Payment:
        </label>
        <input
          type="text"
          id="feePayment"
          name="feePayment"
          value={formData.feePayment}
          onChange={handleChange}
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="additionalDocuments"
        >
          Additional Documents (if applicable):
        </label>
        <input
          type="file"
          id="additionalDocuments"
          name="additionalDocuments"
          onChange={handleChange}
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
