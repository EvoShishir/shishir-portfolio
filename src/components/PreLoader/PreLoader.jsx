import React from "react";
import "./PreLoader.css";
import { BarLoader } from "react-spinners";

const PreLoader = ({ loading }) => {
  return (
    <div className={`loading__container_${loading}`}>
      <div className="loading__text">
        <h2>
          Browse with a desktop for the
          <br />
          <span className="green">Best Experience</span>
        </h2>
      </div>
      <div className="loading__loader">
        <BarLoader
          color="#55e6a5"
          loading={loading}
          height={5}
          width={300}
          size={80}
        />
      </div>
    </div>
  );
};

export default PreLoader;
