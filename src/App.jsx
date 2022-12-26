import ExpenseItem from "./components/ExpenseItem";
import React from "react";

const App = () => {
  const expenses = [
    {
      title: "Bike Insurance",
      date: new Date(2022, 0, 13),
      amount: 232.56,
    },
    {
      title: "Car Insurance",
      date: new Date(2022, 4, 5),
      amount: 532.56,
    },
    {
      title: "Cycle Insurance",
      date: new Date(2022, 6, 26),
      amount: 32.56,
    },
    {
      title: "Helicopter Insurance",
      date: new Date(2022, 11, 23),
      amount: 2232.56,
    },
  ];
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </>
  );
};

export default App;
