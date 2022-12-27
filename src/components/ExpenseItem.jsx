import React, { useState } from "react";
const Home = (props) => {
  const [title, setTitle] = useState(props.title);
  const updation = () => {
    setTitle("Updated Title!");
  };
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex justify-between bg-blue-100 p-5 rounded-xl shadow-lg items-center w-6/12 m-3">
          <div className=" flex font-medium items-center space-x-6">
            <div className=" text-center w-32  bg-indigo-400  py-3 rounded-xl text-white">
              <div>{month}</div>
              <div>{year}</div>
              <div>{day}</div>
            </div>
            <h2 className="text-blue-600 text-xl font-semibold my-auto">
              {title}
            </h2>
          </div>
          <div className="transition duration-150 ease-out hover:ease-in py-3 px-8 text-blue-600 font-bold rounded-lg border-blue-500 border-2 hover:bg-blue-500 hover:text-white">
            ${props.amount}
          </div>
          <button className="bg-white p-3" onClick={updation}>
            Click Me!
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
