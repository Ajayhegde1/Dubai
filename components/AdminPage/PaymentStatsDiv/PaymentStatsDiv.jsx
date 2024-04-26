import React from "react";

export default function PaymentStatsDiv() {
  return (
    <section className="w-[100vw] flex justify-center">
      <div className=" w-[90%] p-[2vw]">
        <h1 className="text-2xl font-bold">Payment Status</h1>
        <div className="flex">
          <div className="w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Registered but not Paid
            </h3>
            <p className="text-gray-700">1,000</p>
          </div>
          <div className="w-1/3 mx-4 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Registered but partially Paid
            </h3>
            <p className="text-gray-700">Rs. 4,000</p>
          </div>
          <div className="w-1/3 mx-4 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Registered and Fully Paid
            </h3>
            <p className="text-gray-700">15,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
