import { createStore } from "redux";
import expenseReducer from "../components/reducers/expenseReducer.js";




const store = createStore(expenseReducer);

export default store;




