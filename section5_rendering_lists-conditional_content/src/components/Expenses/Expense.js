import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

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
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      
      {filteredExpress.map(expense => (
        <ExpenseItem 
         key={expense.id}
         title={expense.title} 
         amount={expense.amount} 
         date={expense.date}
         />
      ))}
    </Card>
  );
};

export default Expense;




