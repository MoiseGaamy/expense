import React from 'react'
import Expense from './Expense.js'
import {connect} from "react-redux"

const Expenses = ({ expenses }) => {

    return (
        <div className="display">
            {
                expenses.map(expense =>  <Expense key={expense.id} expense={expense} />
             )}
        </div>
    )
}
const mSTP = (state) => {
    console.log(state);
    return {
        expenses: state.expense.expenses
    }
}
export default connect(mSTP)(Expenses)
