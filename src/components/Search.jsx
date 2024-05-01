import React, { useState } from "react";
function Search() {
  const [inputtext, setinput] = useState("");
  const inputHandle = (e) => {
    setinput(e.target.value);
    e.preventDefault();
  };

  const listed = [
    {
      id: 1,
      text: "Devpulse",
    },
    {
      id: 2,
      text: "Linklinks",
    },
    {
      id: 3,
      text: "Centizu",
    },
    {
      id: 4,
      text: "Dynabox",
    },
    {
      id: 5,
      text: "Avaveo",
    },
    {
      id: 6,
      text: "Demivee",
    },
    {
      id: 7,
      text: "Jayo",
    },
    {
      id: 8,
      text: "Blognation",
    },
    {
      id: 9,
      text: "Podcat",
    },
    {
      id: 10,
      text: "Layo",
    },
  ];
  if (inputtext.length > 0) {
    listed.filter((listed) => {
      return listed.text(inputtext);
    });
  }
  return (
    <>
      <div className="container">
        <div className="main d-flex flex-column w-100  min-vh-100 align-items-center">
          <h1>React Search</h1>
          <input value={inputtext} onChange={inputHandle} type="text" />
          {listed.map((data, index) => (
            <>
              <ul>
                <li>
                  {data.id}
                  {data.text}
                </li>
              </ul>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
