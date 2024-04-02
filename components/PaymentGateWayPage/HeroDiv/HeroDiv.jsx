"use client";
import { useState } from "react";
import VerticalTabs from "../VerticalTabs/VerticalTabs";
import { NavBar } from "@/components/NavBar/NavBar";

export function HeroDiv() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Function to handle payment method selection
  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  // Function to handle payment submission
  const handleSubmit = () => {
    // Logic to handle payment submission
    console.log(`Payment submitted using ${selectedMethod}`);
  };
  return (
    <section>
      <NavBar />
      <VerticalTabs />
    </section>
  );
}

{
  /* <div className="container mx-auto p-4">
<h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>
<div className="flex flex-wrap justify-between gap-4">
  
  <div
    className="payment-method"
    onClick={() => handleMethodSelect("UPI")}
  >
    <img src="/upi-logo.png" alt="UPI" className="h-12" />
    <span className="block mt-2">UPI</span>
  </div>

  
  <div
    className="payment-method"
    onClick={() => handleMethodSelect("Credit Card")}
  >
    <img
      src="/credit-card-logo.png"
      alt="Credit Card"
      className="h-12"
    />
    <span className="block mt-2">Credit Card</span>
  </div>

 
</div>


{selectedMethod && (
  <div className="mt-8">
    <h3 className="text-xl font-bold mb-4">Payment Details</h3>
    <p>Selected Payment Method: {selectedMethod}</p>
    
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      onClick={handleSubmit}
    >
      Pay Now
    </button>
  </div>
)}
</div> */
}
