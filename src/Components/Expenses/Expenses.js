import React, { useState } from "react";

// import ExpenseItem from "../Expenses/ExpenseItem";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
// import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteryear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteryear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expenseContent = <p>No Expense Found</p>;
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       id={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {props.items.map((expense) => (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* {expenseContent} */}

        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
