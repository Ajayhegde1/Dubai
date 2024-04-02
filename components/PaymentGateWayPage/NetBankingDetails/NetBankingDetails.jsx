import React, { useState } from "react";

const NetBankingDetails = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleIfscCodeChange = (e) => {
    setIfscCode(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <div>
        <div className="mb-4">
          <label htmlFor="bankName" className="block mb-2">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            value={bankName}
            onChange={handleBankNameChange}
            className="border border-gray-400 rounded py-2 px-4 block w-full"
            placeholder="Enter bank name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block mb-2">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            className="border border-gray-400 rounded py-2 px-4 block w-full"
            placeholder="Enter account number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ifscCode" className="block mb-2">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            value={ifscCode}
            onChange={handleIfscCodeChange}
            className="border border-gray-400 rounded py-2 px-4 block w-full"
            placeholder="Enter IFSC code"
          />
        </div>
      </div>
    </div>
  );
};

export default NetBankingDetails;
