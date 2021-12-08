import { createStore,applyMiddleware,compose,combineReducers } from "redux";
import  thunk  from 'redux-thunk';
import expenseReducer from "../components/reducers/expenseReducer.js";
import { getFirebase, reduxReactFirebase ,firebaseReducer } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config.js";

const reducers = combineReducers({
    expense: expenseReducer,
    firebase: firebaseReducer
}
)


const store = createStore(reducers,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
    ));

export default store;




