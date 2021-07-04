import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    console.log(filteredYear);
  };

  //Add filtered Result.
  const filteredExpress = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpress} />
      <ExpensesList items={filteredExpress} />
    </Card>
  );
};

export default Expense;




