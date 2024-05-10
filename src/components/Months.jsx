import React, { useState } from "react";
import { January, Febuary, March, April, May } from "../components/Helper";

function Months() {
  const [tabs, settabs] = useState("tab1");

  const handleClick = (tab) => {
    settabs(tab);
  };

  return (
    <>
      <>
        <div className="">
          <div className="container   ">
            <h1 className=" text-center text-black text-uppercase mb-0 pb-4">
              Worksheet {new Date().getFullYear()}{" "}
            </h1>
            <h2 className=" mb-0 pb-4  text-uppercase text-uppercase text-center  text-lg-end">
              inderjeet bishnoi-407
            </h2>
            <div className=" row  tabs">
              <div className=" col-lg-4  col-12 d-flex justify-content-center   ">
                <div className=" d-flex flex-column gap-5 flex-lg-row  ">
                  <h2 className=" text-black text-center  text-lg-start text-uppercase">
                    Months
                  </h2>
                  <div className="btn_box d-flex flex-lg-column flex-wrap justify-content-center justify-content-lg-start   gap-4 align-items-center">
                    <button
                      className={`${
                        tabs === "tab1" ? "bg-[#282F3E]" : ""
                      }   month_btn   `}
                      onClick={() => handleClick("tab1")}
                    >
                      {" "}
                      JANUARY
                    </button>
                    <button
                      className={`${
                        tabs === "tab2" ? "bg-[#282F3E]" : ""
                      } month_btn `}
                      onClick={() => handleClick("tab2")}
                    >
                      FEBUARY
                    </button>
                    <button
                      className={`${
                        tabs === "tab3" ? "bg-[#282F3E]" : ""
                      } month_btn `}
                      onClick={() => handleClick("tab3")}
                    >
                      MARCH
                    </button>
                    <button
                      className={`${
                        tabs === "tab4" ? "bg-[#282F3E]" : ""
                      } month_btn `}
                      onClick={() => handleClick("tab4")}
                    >
                      APRIL
                    </button>
                    <button
                      className={`${
                        tabs === "tab5" ? "bg-[#282F3E]" : ""
                      } month_btn `}
                      onClick={() => handleClick("tab5")}
                    >
                      MAY
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-12 h-full">
                {January.map((data, index) => (
                  <>
                    {tabs === "tab1" && (
                      <>
                        {/* january */}
                        <div className="row pb-4">
                          <div className="col-md-4 col-12">
                            <img
                              className=" w-100  br_30"
                              src={data.img1}
                              alt="digiceny"
                            />
                          </div>
                          <div className="col-md-8 col-12 d-flex justify-content-center  flex-column">
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.heading} </p>
                              <a target="_blank" href={data.gitlink}>
                                {data.gitlink}
                              </a>{" "}
                            </div>
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.live} </p>
                              <a target="_blank" href={data.netlify}>
                                {data.netlify}
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
                {Febuary.map((data, index) => (
                  <>
                    {tabs === "tab2" && (
                      <>
                        {/* september */}
                        <div className="row pb-4 d-flex justify-content-center">
                          <div className="col-md-4 col-12">
                            <img
                              className=" w-100  br_30"
                              src={data.img1}
                              alt="digiceny"
                            />
                          </div>
                          <div className="col-md-8 col-12 d-flex justify-content-center  flex-column">
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.heading} </p>
                              <a target="_blank" href={data.gitlink}>
                                {data.gitlink}
                              </a>{" "}
                            </div>
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.live} </p>
                              <a target="_blank" href={data.netlify}>
                                {data.netlify}
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
                {March.map((data, index) => (
                  <>
                    {tabs === "tab3" && (
                      <>
                        {/* september */}
                        <div className="row pb-4">
                          <div className="col-md-4 col-12">
                            <img
                              className=" w-100  br_30"
                              src={data.img1}
                              alt="digiceny"
                            />
                          </div>
                          <div className="col-md-8 col-12 d-flex justify-content-center  flex-column">
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.heading} </p>
                              <a target="_blank" href={data.gitlink}>
                                {data.gitlink}
                              </a>{" "}
                            </div>
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className="text-black ">{data.live} </p>
                              <a target="_blank" href={data.netlify}>
                                {data.netlify}
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
                {April.map((data, index) => (
                  <>
                    {tabs === "tab4" && (
                      <>
                        {/* april */}
                        <div className="row pb-4">
                          <div className="col-md-4 col-12">
                            <img
                              className=" w-100  br_30"
                              src={data.img1}
                              alt="digiceny"
                            />
                          </div>
                          <div className="col-md-8 col-12 d-flex justify-content-center  flex-column">
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.heading} </p>
                              <a target="_blank" href={data.gitlink}>
                                {data.gitlink}
                              </a>{" "}
                            </div>
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.live} </p>
                              <a target="_blank" href={data.netlify}>
                                {data.netlify}
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
                {May.map((data, index) => (
                  <>
                    {tabs === "tab5" && (
                      <>
                        {/* april */}
                        <div className="row pb-4">
                          <div className="col-md-4 col-12">
                            <img
                              className=" w-100  br_30"
                              src={data.img1}
                              alt="digiceny"
                            />
                          </div>
                          <div className="col-md-8 col-12 d-flex justify-content-center  flex-column">
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.heading} </p>
                              <a target="_blank" href={data.gitlink}>
                                {data.gitlink}
                              </a>{" "}
                            </div>
                            <div className=" d-flex text-white  gap-2">
                              {" "}
                              <p className=" text-black ">{data.live} </p>
                              <a target="_blank" href={data.netlify}>
                                {data.netlify}
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Months;
