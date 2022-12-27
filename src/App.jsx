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
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </>
  );
};

export default App;
