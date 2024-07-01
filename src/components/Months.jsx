import React, { useState } from "react";
import {
  January,
  Febuary,
  March,
  April,
  May,
  June,
} from "../components/Helper";

function Months() {
  const [tabs, settabs] = useState("tab1");

  const handleClick = (tab) => {
    settabs(tab);
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
                className={`month_btn ${tabs === "tab1" ? "active" : ""}`}
                onClick={() => handleClick("tab1")}
              >
                JANUARY
              </button>
              <button
                className={`month_btn ${tabs === "tab2" ? "active" : ""}`}
                onClick={() => handleClick("tab2")}
              >
                FEBUARY
              </button>
              <button
                className={`month_btn ${tabs === "tab3" ? "active" : ""}`}
                onClick={() => handleClick("tab3")}
              >
                MARCH
              </button>
              <button
                className={`month_btn ${tabs === "tab4" ? "active" : ""}`}
                onClick={() => handleClick("tab4")}
              >
                APRIL
              </button>
              <button
                className={`month_btn ${tabs === "tab5" ? "active" : ""}`}
                onClick={() => handleClick("tab5")}
              >
                MAY
              </button>
              <button
                className={`month_btn ${tabs === "tab6" ? "active" : ""}`}
                onClick={() => handleClick("tab6")}
              >
                JUNE
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12 h_500 overflow-y-scroll">
          {tabs === "tab1" &&
            January.map((data, index) => (
              <div key={index} className="row pb-4 content-box">
                <div className="col-md-4 col-12">
                  <img className="w-100 br_30" src={data.img1} alt="project" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center flex-column">
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.heading}</p>
                    <a target="_blank" href={data.gitlink} rel="noreferrer">
                      {data.gitlink}
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.live}</p>
                    <a target="_blank" href={data.netlify} rel="noreferrer">
                      {data.netlify}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {tabs === "tab2" &&
            Febuary.map((data, index) => (
              <div key={index} className="row pb-4 content-box">
                <div className="col-md-4 col-12">
                  <img className="w-100 br_30" src={data.img1} alt="project" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center flex-column">
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.heading}</p>
                    <a target="_blank" href={data.gitlink} rel="noreferrer">
                      {data.gitlink}
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.live}</p>
                    <a target="_blank" href={data.netlify} rel="noreferrer">
                      {data.netlify}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {tabs === "tab3" &&
            March.map((data, index) => (
              <div key={index} className="row pb-4 content-box">
                <div className="col-md-4 col-12">
                  <img className="w-100 br_30" src={data.img1} alt="project" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center flex-column">
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.heading}</p>
                    <a target="_blank" href={data.gitlink} rel="noreferrer">
                      {data.gitlink}
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.live}</p>
                    <a target="_blank" href={data.netlify} rel="noreferrer">
                      {data.netlify}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {tabs === "tab4" &&
            April.map((data, index) => (
              <div key={index} className="row pb-4 content-box">
                <div className="col-md-4 col-12">
                  <img className="w-100 br_30" src={data.img1} alt="project" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center flex-column">
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.heading}</p>
                    <a target="_blank" href={data.gitlink} rel="noreferrer">
                      {data.gitlink}
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.live}</p>
                    <a target="_blank" href={data.netlify} rel="noreferrer">
                      {data.netlify}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {tabs === "tab5" &&
            May.map((data, index) => (
              <div key={index} className="row pb-4 content-box">
                <div className="col-md-4 col-12">
                  <img className="w-100 br_30" src={data.img1} alt="project" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center flex-column">
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.heading}</p>
                    <a target="_blank" href={data.gitlink} rel="noreferrer">
                      {data.gitlink}
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.live}</p>
                    <a target="_blank" href={data.netlify} rel="noreferrer">
                      {data.netlify}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {tabs === "tab6" &&
            June.map((data, index) => (
              <div key={index} className="row pb-4 content-box">
                <div className="col-md-4 col-12">
                  <img className="w-100 br_30" src={data.img1} alt="project" />
                </div>
                <div className="col-md-8 col-12 d-flex justify-content-center flex-column">
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.heading}</p>
                    <a target="_blank" href={data.gitlink} rel="noreferrer">
                      {data.gitlink}
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="text-black">{data.live}</p>
                    <a target="_blank" href={data.netlify} rel="noreferrer">
                      {data.netlify}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Months;
