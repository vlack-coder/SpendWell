import React, { useState } from "react";
import moment from "moment";
import "react-dates/initialize"; // necessary for latest version import { SingleDatePicker } from 'react-dates'; import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const ExpenseForm = ({ expense, onSubmit }) => {
  const [expenses, setexpenses] = useState({
    description: expense ? expense.description : "",
    note: expense ? expense.note : "",
    amount: expense ? (expense.amount / 100).toString() : "",
    createdAt: expense ? moment(expense.createdAt) : moment(),
    error: "",
  });

  const [calendarFocused, setCalendarFocused] = useState(false);

  const { description, note, amount, createdAt, error } = expenses;

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setexpenses({ ...expenses, description });
  };
  const onNoteChange = (e) => {
    const note = e.target.value;
    setexpenses({ ...expenses, note });
  };
  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setexpenses({ ...expenses, amount });
    }
  };
  const onDateChange = (createdAt) => {
    if (createdAt) {
      setexpenses({ ...expenses, createdAt });
    }
  };
  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };
  const onSumit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      setexpenses({
        ...expenses,
        error: "Please provide description and amount.",
      });
    } else {
      setexpenses({ ...expenses, error: "" });
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form className="form" onSubmit={onSumit}>
        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expenses (optional)"
          value={note}
          className="textarea"
          onChange={onNoteChange}
        ></textarea>
        <div>
        <button  className="button">Add expenses</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
