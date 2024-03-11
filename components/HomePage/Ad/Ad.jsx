import React from "react";
import PropTypes from "prop-types";
import "./helperAd.css";
import Image from "next/image";

const Ad = ({ title, description, imageUrl, link }) => {
  return (
    <div className="facebook-ad bg-white rounded-lg shadow-md  w-[50vw] ">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="ad-link"
      >
        <div className="ad-content flex gap-[5vw] ">
          <div className="ad-label">Sponsored</div>
          <Image src={imageUrl} alt="Ad" className="ad-image" />
          <div className="ad-text">
            <h3 className="ad-title">{title}</h3>
            <p className="ad-description">{description}</p>
            <p className="ad-link-text">{link}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

Ad.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Ad;
