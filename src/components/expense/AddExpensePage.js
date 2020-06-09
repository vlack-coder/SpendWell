import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../../actions/expense";

const AddExpensePage = ({ history, addExpense }) => {
  const onsumit = (expense) => {
    addExpense(expense);
    history.push("/dashboard");
  };
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={onsumit} />
      </div>
    </div>
  );
};

export default connect(null, { addExpense })(AddExpensePage);
