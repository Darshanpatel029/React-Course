// import React, { useState } from "react";
import React from "react";


import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');

  // const clickHandler = () => {
  //     setTitle('Updated!');
  //     console.log(title);
  // };
  //   console.log(props.amount);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
