import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../../actions/expense";

export const EditExpensePage = ({
  editExpense,
  removeExpense,
  history,
  expense,
}) => {
  const onsumit = (expens) => {
    editExpense(expense.id, expens);
    history.push("/dashboard");
  };
  return (
    <div>
       <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
      <ExpenseForm expense={expense} onSubmit={onsumit} />
      <button
        onClick={() => {
          removeExpense({ id: expense.id });
          history.push("/");
        }}
        className="button button--secondary"
      >
        Remove
      </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps, { editExpense, removeExpense })(
  EditExpensePage
);
