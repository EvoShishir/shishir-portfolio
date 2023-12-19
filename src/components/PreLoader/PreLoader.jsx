import React from "react";
import "./PreLoader.css";
import { BarLoader } from "react-spinners";

const PreLoader = ({ loading, loaderColor, accentColor }) => {
  return (
    <div className={`loading__container_${loading}`}>
      <div className="loading__text">
        <h2>
          Browse with a desktop for the
          <br />
          <span style={{ color: `${accentColor}` }}>Best Experience</span>
        </h2>
      </div>
      <BarLoader
        loading={loading}
        height={5}
        width={300}
        size={80}
        color={`${loaderColor}`}
      />
    </div>
  );
};

export default PreLoader;
