import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center mt-5">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quasi, error reprehenderit quaerat rerum animi.
        </p>
        <Link to="/appointment">
          <button className="btn btn-info">GET APPOINTMENT</button>
        </Link>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
