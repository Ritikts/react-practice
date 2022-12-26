import React from "react";

const Home = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <section className="flex justify-between bg-blue-100 p-5 m-5 rounded-xl shadow-lg">
        <div className="flex space-x-6 items-center font-medium">
          <div className="text-blue-500">
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
          </div>
          <h2 className="text-blue-600 text-xl font-semibold">{props.title}</h2>
        </div>
        <div className="py-3 px-8 bg-blue-200 text-blue-600 font-bold rounded-lg border-blue-600 border-2 hover:bg-blue-600 hover:text-white">
          ${props.amount}
        </div>
      </section>
    </>
  );
};

export default Home;
