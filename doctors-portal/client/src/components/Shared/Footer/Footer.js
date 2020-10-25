import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <ul className="mt-5">
            <li>Emergency Dental Care </li>
            <li>Check up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check up</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="text-center">Services</h5>
          <ul>
            <li>Emergency Dental Care </li>
            <li>Check up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check up</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="text-center">Oral Health</h5>
          <ul>
            <li>Emergency Dental Care </li>
            <li>Check up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check up</li>
          </ul>
        </div>
        <div className="col text-center">
          <h5 className="text-center">Our Address</h5>
          <p>
            New York - 101010 <br />
            Hudson Yords
          </p>

          <p>
            Call Now - <br />
            <button className="btn btn-primary">+202552552</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
