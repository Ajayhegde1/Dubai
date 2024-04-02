import React, { useState } from "react";
import visaLogo from "@/public/visa.jpeg";
import mastercardLogo from "@/public/Mastercard-Logo.png";
import rupayLogo from "@/public/rupay.png";

import Image from "next/image";
import cardImg from "@/public/card.png";
const CreditCardDetails = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState(null);
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value;
    setCardNumber(inputCardNumber);

    // Determine the card type based on the first few digits of the card number
    if (/^4/.test(inputCardNumber)) {
      setCardType("visa");
    } else if (/^5/.test(inputCardNumber)) {
      setCardType("mastercard");
    } else if (/^6/.test(inputCardNumber)) {
      setCardType("rupay");
    } else {
      setCardType(null);
    }
  };
  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  return (
    <div className="mx-auto p-6">
      <div>
        {/* <h3>Debit Card Details</h3> */}
        <div className="mb-4 relative flex flex-col space-y-4 ">
          <div className="flex gap-[10px]">
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="border border-gray-400 rounded py-2 px-4 block w-full pr-12 "
              placeholder="Enter your card number"
            />
            <div className="relative border border-gray-400 rounded p-1">
              {cardType === "visa" && (
                <Image src={visaLogo} alt="Visa Card" className="w-[5vh]" />
              )}
              {cardType === "mastercard" && (
                <Image
                  src={mastercardLogo}
                  alt="Mastercard"
                  className="w-[5vh]"
                />
              )}
              {cardType === "rupay" && (
                <Image src={rupayLogo} alt="Rupay Card" className="w-[8vh]" />
              )}
              {cardType !== "visa" &&
                cardType !== "mastercard" &&
                cardType !== "rupay" && (
                  <Image src={cardImg} alt="Default Card" className="w-[5vh]" />
                )}
            </div>
          </div>
          <div>
            <input
              type="text"
              id="cardNumber"
              //   value={cardName}
              className="border border-gray-400 rounded py-2 px-4 block w-full pr-12"
              placeholder="Name on Card"
            />
          </div>

          <div className="flex justify-between">
            <div className="mb-4">
              <input
                type="text"
                id="expiry"
                value={expiry}
                onChange={handleExpiryChange}
                className="border border-gray-400 rounded py-2 px-4 block w-[80%]"
                placeholder="Valid Thru (MM/YY)"
              />
            </div>
            <div className="w-[30%]">
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
                className="border border-gray-400 rounded py-2 px-4 block w-full"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardDetails;
