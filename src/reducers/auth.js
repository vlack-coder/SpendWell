import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { uid: action.uid };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
