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
