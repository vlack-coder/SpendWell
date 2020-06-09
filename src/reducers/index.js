import { combineReducers } from "redux";
import expensereducer from "./expensereducer";
import filterreducer from "./filterreducer";
import authreducer from './auth'

export default combineReducers({
    expenses: expensereducer,
    filters: filterreducer,
    auth: authreducer
})