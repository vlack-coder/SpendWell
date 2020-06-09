import React, { useEffect } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../../selectors/expenses";
import { getExpenses } from "../../actions/expense";

const ExpenseList = ({ expenses, getExpenses }) => {
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    // <div>
    //   <h1>Expense List</h1>
    //   {expenses && expenses.map((expense) => {
    //     return <ExpenseListItem key={expense.id} {...expense} />;
    //   })}
    // </div>
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps, { getExpenses })(ExpenseList);
