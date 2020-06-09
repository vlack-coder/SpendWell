import { REMOVE_EXPENSE, EDIT_EXPENSE, ADD_EXPENSE, GET_EXPENSE } from "../actions/types";

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
      case GET_EXPENSE:
        return action.expenses
    default:
      return state;
  }
};