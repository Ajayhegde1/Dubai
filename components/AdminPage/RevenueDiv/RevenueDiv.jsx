import React from "react";

export default function RevenueDiv() {
  return (
    <section className="w-[100vw] flex justify-center">
      <div className=" w-[90%] p-[2vw]">
        <h1 className="text-2xl font-bold">Revenue</h1>
        <div className="flex">
          <div className="w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Total revenue</h3>
            <p className="text-gray-700">Rs.17,00,000</p>
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">AD revenue</h3>
            <p className="text-gray-700">Rs.2,00,000</p>
          </div>
          <div className="w-1/3 mx-4 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Revenue from Registrations
            </h3>
            <p className="text-gray-700">Rs. 15,00,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
