import React from "react";

const Home = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <section className="flex justify-center items-center ">
        <div className="flex justify-between bg-blue-100 p-5  rounded-xl shadow-lg items-center w-6/12  mt-6">
          <div className=" flex font-medium items-center space-x-6">
            <div className=" text-center w-32  bg-indigo-400  py-3 rounded-xl text-white">
              <div>{month}</div>
              <div>{year}</div>
              <div>{day}</div>
            </div>
            <h2 className="text-blue-600 text-xl font-semibold my-auto">
              {props.title}
            </h2>
          </div>
          <div className="transition duration-150 ease-out hover:ease-in py-3 px-8 text-blue-600 font-bold rounded-lg border-blue-500 border-2 hover:bg-blue-500 hover:text-white">
            ${props.amount}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
