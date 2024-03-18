import React, { useState } from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteryear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteryear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div> 
  );
};

export default Expenses;
