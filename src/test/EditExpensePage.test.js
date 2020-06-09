import React from "react";
import { EditExpensePage } from "../components/expense/EditExpensePage";
import { shallow } from "enzyme";
import expenses from "./fixtures/expenses";


let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]); // add props to expenseform
  expect(history.push).toHaveBeenLastCalledWith("/");   // Then expect this to have happened
  expect(editExpense).toHaveBeenLastCalledWith(
    expenses[2].id,
    expenses[2]
  );
});

test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");  // simulate click on the button component
  expect(history.push).toHaveBeenLastCalledWith("/");  // Then expect this to have happened
  expect(removeExpense).toHaveBeenLastCalledWith({  // Then expect this to have happened
    id: expenses[2].id,
  });
});
