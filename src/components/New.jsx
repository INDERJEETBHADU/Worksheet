import React, { useState } from "react";

function New() {
  const [inputvalue, setinputvalue] = useState({
    taskvalue: "",
    Descriptiontaskvalue: "",
  });
  const [task, settask] = useState([]);

  const submtfrm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputvalue({ ...inputvalue, [name]: value });
  };
  const hanleSubmt = (e) => {
    e.preventDefault();
    settask([
      ...task,
      {
        tittle: inputvalue.taskvalue,
        para: inputvalue.Descriptiontaskvalue,
      },
    ]);

    setinputvalue({
      taskvalue: "",
      Descriptiontaskvalue: "",
    });

    // console.log(task);
  };
  const handledelete = (index) => {
    const value = [...task];
    value.splice(index, 1);
    settask(value);
  };
  return (
    <>
      <div className=" container">
        <form className="" onSubmit={hanleSubmt}>
          <div className=" d-flex gap-4">
            <input
              value={inputvalue.taskvalue}
              onChange={submtfrm}
              className=" w-25 h-25 "
              type="text"
              name="taskvalue"
              required
            />
            <input
              value={inputvalue.Descriptiontaskvalue}
              onChange={submtfrm}
              className=" w-25 h-25 "
              type="text"
              name="Descriptiontaskvalue"
              required
            />
            <button type="submit">submit</button>
          </div>
          {task.map((data, index) => (
            <>
              <div className=" d-flex align-items-center gap-3">
                <li className=" text-black">{data.tittle} </li>

                <li className=" text-black">{data.para}</li>
                <button
                  type="reset"
                  className=" bg-danger"
                  onClick={handledelete}
                >
                  deleted
                </button>
              </div>
            </>
          ))}
        </form>
      </div>
    </>
  );
}

export default New;
