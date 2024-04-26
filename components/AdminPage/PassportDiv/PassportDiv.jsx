import React from "react";

export default function PassportDiv() {
  return (
    <section className="w-[100vw] flex justify-center">
      <div className=" w-[90%] p-[2vw]">
        <h1 className="text-2xl font-bold">Passport Applications</h1>
        <div className="flex h-full w-full gap-[1vw]">
          <div className="w-[40%] bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Total Registered</h3>
            <p className="text-gray-700">20,000</p>
          </div>
          <div className="h-full w-[1px] bg-[#a1a2a3]"></div>
          <div className="flex w-full">
            <div className="w-full mx-4 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Passport Available</h3>
              <p className="text-gray-700">10,000</p>
            </div>
            <div className="w-full mx-4 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                Passport Applications
              </h3>
              <p className="text-gray-700">9,000</p>
            </div>
            <div className="w-full mx-4 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                Passport Applications (Self)
              </h3>
              <p className="text-gray-700">1,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
