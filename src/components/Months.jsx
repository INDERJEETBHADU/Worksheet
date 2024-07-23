import React, { useState } from "react";
import {
  January,
  February,
  March,
  April,
  May,
  June,
  July
} from "../components/Helper";

function Months() {
  const [tabs, settabs] = useState("tab1");

  const handleButtonClick = (tab) => {
    settabs(tab);
  };

  const renderContent = (data) => {
    return data.map((item, index) => (
      <div key={index} className="row pb-4 content-box">
        <div className="col-md-4 col-12">
          <img className="w-100 br_30" src={item.img1} alt="project" />
        </div>
        <div className="col-md-8 col-12 d-flex justify-content-center flex-column">
          <div className="d-flex gap-2">
            <p className="text-black">{item.heading}</p>
            <a target="_blank" href={item.gitlink} rel="noreferrer">
              {item.gitlink}
            </a>
          </div>
          <div className="d-flex gap-2">
            <p className="text-black">{item.live}</p>
            <a target="_blank" href={item.netlify} rel="noreferrer">
              {item.netlify}
            </a>
          </div>
        </div>
      </div>
    ));
  };

  const getCurrentContent = () => {
    switch (tabs) {
      case "tab1":
        return renderContent(January);
      case "tab2":
        return renderContent(February);
      case "tab3":
        return renderContent(March);
      case "tab4":
        return renderContent(April);
      case "tab5":
        return renderContent(May);
      case "tab6":
        return renderContent(June);
      case "tab7":
        return renderContent(July);
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-black text-uppercase mb-0 pb-4">
        Worksheet {new Date().getFullYear()}
      </h1>
      <h2 className="mb-0 pb-4 text-uppercase text-center text-lg-end">
        inderjeet bishnoi-407
      </h2>
      <div className="row tabs">
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <div className="d-flex flex-column gap-5 flex-lg-row">
            <h2 className="text-black text-center text-lg-start text-uppercase">
              Months
            </h2>
            <div className="btn_box d-flex flex-lg-column flex-wrap justify-content-center justify-content-lg-start gap-4 align-items-center">
              <button
                className={`btn ${
                  tabs === "tab1" ? "btn-primary" : "btn-secondary"
                } custom-button`}
                onClick={() => handleButtonClick("tab1")}
              >
                JANUARY
              </button>
              <button
                className={`btn ${
                  tabs === "tab2" ? "btn-primary" : "btn-secondary"
                } custom-button`}
                onClick={() => handleButtonClick("tab2")}
              >
                FEBRUARY
              </button>
              <button
                className={`btn ${
                  tabs === "tab3" ? "btn-primary" : "btn-secondary"
                } custom-button`}
                onClick={() => handleButtonClick("tab3")}
              >
                MARCH
              </button>
              <button
                className={`btn ${
                  tabs === "tab4" ? "btn-primary" : "btn-secondary"
                } custom-button`}
                onClick={() => handleButtonClick("tab4")}
              >
                APRIL
              </button>
              <button
                className={`btn ${
                  tabs === "tab5" ? "btn-primary" : "btn-secondary"
                } custom-button`}
                onClick={() => handleButtonClick("tab5")}
              >
                MAY
              </button>
              <button
                className={`btn ${
                  tabs === "tab6" ? "btn-primary" : "btn-secondary"
                } custom-button`}
                onClick={() => handleButtonClick("tab6")}
              >
                JUNE
              </button>
              <button
                className={`btn ${
                  tabs === "tab7" ? "btn-primary" : "btn-secondary"
                } custom-button`}
                onClick={() => handleButtonClick("tab7")}
              >
                JULY
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12 h_500 overflow-y-scroll">
          {getCurrentContent()}
        </div>
      </div>
    </div>
  );
}

export default Months;
