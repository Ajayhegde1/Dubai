import React, { useState } from "react";
import DebitCardDetails from "../DebitCardDetails/DebitCardDetails ";
import CreditCardDetails from "../CreditCardDetails/CreditCardDetails";
import NetBankingDetails from "../NetBankingDetails/NetBankingDetails";
import qrImg from "@/public/qr.png";
import Image from "next/image";
import monImg from "@/public/monIcon.png";
import Link from "next/link";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState("debit-card");
  const [upiId, setUpiId] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [selectedBank, setSelectedBank] = useState();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };
  const handleShowQR = () => {
    setShowQr(true);
  };

  return (
    <section className="w-[100vw] flex justify-center">
      <div className="flex justify-between w-[80vw] gap-[5vw]">
        <div className="flex w-[60vw] h-[80vh] p-6 shadow-xl justify-evenly">
          <div className="w-[30%] flex flex-col items-center justify-center">
            <h1 className="text-[40px] text-center font-[700] mt-[-15vh]">
              Payment <br></br> Details
            </h1>
            {/* <Image src={monImg} height={200} /> */}
          </div>
          <div className="h-full flex items-center">
            <div className="bg-gray-300 h-[80%] w-[2px] ml-[-1vw]"></div>
          </div>
          <div className="w-[60%]">
            <div className="flex pb-[4vh]">
              <div
                className={`w-full text-center py-2 px-4 mb-2 cursor-pointer ${
                  activeTab === "debit-card" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => handleTabClick("debit-card")}
              >
                Debit Card
              </div>
              <div
                className={`w-full text-center py-2 px-4 mb-2 cursor-pointer ${
                  activeTab === "credit-card"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleTabClick("credit-card")}
              >
                Credit Card
              </div>
              <div
                className={`w-full text-center py-2 px-4 mb-2 cursor-pointer ${
                  activeTab === "upi" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => handleTabClick("upi")}
              >
                UPI
              </div>
              <div
                className={`w-full text-center py-2 px-4 mb-2 cursor-pointer ${
                  activeTab === "net-banking"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleTabClick("net-banking")}
              >
                Net Banking
              </div>
            </div>

            <div className="">
              {activeTab === "debit-card" && (
                <div className="">
                  <h3 className="text-[20px] font-[600] pl-6">
                    Debit Card Details
                  </h3>
                  <DebitCardDetails />
                </div>
              )}
              {activeTab === "credit-card" && (
                <div>
                  <h3 className="text-[20px] font-[600] pl-6">
                    Credit Card Details
                  </h3>
                  <CreditCardDetails />
                </div>
              )}

              {activeTab === "upi" && (
                <div className="px-6">
                  <div>
                    <h3 className="text-[20px] font-[600]">UPI Details </h3>
                  </div>
                  <h3 className="text-gray-500 text-[16px] font-[400] mt-[2vh]">
                    Enter UPI ID :
                  </h3>
                  <div className="flex items-center gap-[0.5vw]">
                    <input
                      type="text"
                      placeholder="ram-1"
                      value={upiId}
                      onChange={handleUpiIdChange}
                      className="border border-gray-400 rounded py-2 px-4  w-[80%]"
                    />
                    <p>@</p>
                    <select
                      type="text"
                      placeholder="ram@okicicibank"
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="border border-gray-400 rounded py-2 px-4 w-[20%]"
                    >
                      <option value="1">okicici</option>
                      <option value="2">okhdfc</option>
                      <option value="3">ybl</option>
                      <option value="4">oksbi</option>
                    </select>
                  </div>
                  <div className="my-[3vh]">
                    <button
                      onClick={handleShowQR}
                      className="h-auto w-auto border rounded-[12px] px-[10px] py-[10px]"
                    >
                      Show QR
                    </button>
                    {showQr ? (
                      <div className="mt-[2vh] ">
                        <Image
                          height={150}
                          src={qrImg}
                          alt="UPI QR Code"
                          className=""
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )}

              {activeTab === "net-banking" && (
                <div>
                  <h3 className="text-[20px] font-[600] pl-6">
                    Net Banking Details
                  </h3>
                  <NetBankingDetails />
                </div>
              )}
            </div>
            <Link href="/V1/HomePage">
              <button className=" text-white text-[20px] font-[600] bg-[#32C770] rounded-[12px] py-[1vh] w-full">
                Pay Rs. 80,000
              </button>
            </Link>
          </div>
        </div>

        {/* Merchant */}
        <div className="flex flex-col space-y-[3vh] rounded-xl p-[2vw] w-[35%] h-[55%] bg-white shadow-xl">
          <div className="">
            <p className="text-[24px] font-[600]">Merchant Details :</p>
            <p className="text-[18px] font-[500]">Rotary Test Account</p>
          </div>

          <div>
            <p className="text-[16px] font-[500] text-gray-500">
              Transaction ID:
              <span className="text-[18px] font-[700] text-black">
                #99856641690
              </span>
            </p>
          </div>
          <div>
            <div>
              <h1 className="text-[24px] font-[700]">Overview :</h1>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-[500] text-gray-500">
                  Flight Ticket
                </p>
                <p className="text-[18px] font-[700]">Rs. 50,000</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-[500] text-gray-500">
                  Accomodation:
                </p>
                <p className="text-[18px] font-[700]">Rs. 20,000</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-[500] text-gray-500">
                  Misc. (Incl. of food,Transport...)
                </p>
                <p className="text-[18px] font-[700]">Rs. 10,000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[10px]">
            <div className="h-[1px] w-full bg-slate-500"></div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-[500] text-gray-500">
                Total Amount
              </p>
              <p className="text-[20px] font-[700]">Rs. 80,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTabs;
