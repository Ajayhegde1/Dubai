import React from "react";
import PropTypes from "prop-types";
import "./modalPassportHelper.css"; // Import your CSS file
import passPortImg from "@/public/passport.png";
import Image from "next/image";
import rightImg from "@/public/arrow-right.png";
const PassportApplicationStatus = ({
  isOpen,
  onClose,
  status,
  currentStage = "Processing",
}) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-[30px] font-[700]">Passport Application Status</h2>
        <p className="text-[20px] mb-[40px]">
          <span className="font-[500]">Current Status:</span>{" "}
          <span>{status}</span>
        </p>
        <div className="tracking-images">
          {/* Images representing different states of tracking */}
          <div>
            <div className="flex gap-[2vw]">
              <Image
                className={currentStage === "Applied" ? "active" : ""}
                height={50}
                width={50}
                src={passPortImg}
                alt="Applied"
              />{" "}
              <Image src={rightImg} />
            </div>
            <p className="mt-[20px] text-[16px] font-[600]">Applied</p>
            {currentStage !== "Applied" && <div className="arrow-right"></div>}
          </div>
          <div>
            <div className="flex gap-[3vw]">
              <Image
                height={50}
                width={50}
                src={passPortImg}
                className={
                  currentStage === "Document Verification" ? "active" : ""
                }
                alt="Document Verification"
              />
              <Image src={rightImg} />
            </div>
            <p className="mt-[20px] text-[16px] font-[600]">
              Document Verification
            </p>
            {currentStage !== "Applied" && <div className="arrow-right"></div>}
          </div>
          <div>
            <div className="flex gap-[3vw]">
              <Image
                height={50}
                width={50}
                src={passPortImg}
                className={
                  currentStage === "Police Verification" ? "active" : ""
                }
                alt="Police Verification"
              />{" "}
              <Image src={rightImg} />
            </div>
            <p className="mt-[20px] text-[16px] font-[600]">
              Police Verification
            </p>
            {currentStage !== "Applied" && <div className="arrow-right"></div>}
          </div>
          <div>
            <Image
              height={50}
              width={50}
              className={currentStage === "Processing" ? "active" : ""}
              src={passPortImg}
              alt="Processing"
            />
            <p className="mt-[20px] text-[16px] font-[600]">Processing</p>
            {currentStage !== "Applied" && <div className="arrow-right"></div>}
          </div>
          <div>
            <Image
              height={50}
              width={50}
              className={currentStage === "Printing" ? "active" : ""}
              src={passPortImg}
              alt="Printing"
            />
            <p className="mt-[20px] text-[16px] font-[600]">Printing</p>
            {currentStage !== "Applied" && <div className="arrow-right"></div>}
          </div>
          <div>
            <Image
              height={50}
              width={50}
              className={currentStage === "Dispatched" ? "active" : ""}
              src={passPortImg}
              alt="Dispatched"
            />
            <p className="mt-[20px] text-[16px] font-[600]">Dispatched</p>
            {currentStage !== "Applied" && <div className="arrow-right"></div>}
          </div>
          <div>
            <Image
              height={50}
              width={50}
              className={currentStage === "Received" ? "active" : ""}
              src={passPortImg}
              alt="Received"
            />
            <p className="mt-[20px] text-[16px] font-[600]">Received</p>
            {currentStage !== "Applied" && <div className="arrow-right"></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

PassportApplicationStatus.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default PassportApplicationStatus;
