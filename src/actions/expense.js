import {
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  ADD_EXPENSE,
  GET_EXPENSE,
} from "../actions/types";
import database from "../firebase/firebase";


// ADD_EXPENSE
export const addExpense = (expenseData = {}) => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  const {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0,
  } = expenseData;

  const expense = { description, note, amount, createdAt };

  const ref = await database.ref(`users/${uid}/expenses`).push(expense);
  dispatch({
    type: ADD_EXPENSE,
    expense: {
      id: ref.key,
      ...expense,
    },
  });
};


export const getExpenses = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  const snapshot = await database.ref(`users/${uid}/expenses`).once("value");
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });

  dispatch({
    type: GET_EXPENSE,
    expenses,
  });
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  await database.ref(`users/${uid}/expenses/${id}`).remove();
  dispatch({ type: REMOVE_EXPENSE, id });
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  await database.ref(`users/${uid}/expenses/${id}`).update(updates);
  dispatch({ type: EDIT_EXPENSE, id, updates });
};
