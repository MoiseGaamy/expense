import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/expenseAction.js';
import { editExpense } from '../actions/expenseAction.js';
import { getAllExpense } from '../actions/expenseAction.js';

const Expense = ({ expense, deletet, edite, getAllExpense}) => {
    const [edit, setEdit] = useState(false);
    const [field, setField] = useState({
        id: expense.id,
        item: expense.item,
        amount: expense.amount,
        category: expense.category,
        date: expense.date
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setField((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        edite(expense.id, field)
        setEdit(!edit);

    }
    console.log(expense);

    useEffect(() => {
        getAllExpense();
    },[getAllExpense])
    return (
        <>
            {edit ? (
                <form className="add-form" onSubmit={handleSubmit}>
                    <label>Item</label>
                    <div className="control">
                        <input type="text" name="item" placeholder="item" onChange={handleChange} value={field.item} />
                    </div>
                    <label>Amount Paid</label>
                    <div className="control">
                        <input type="text" name="amount" placeholder="Amount" onChange={handleChange} value={field.amount} />
                    </div>
                    <label for="items">Category:</label>
                    <div className="control">
                        <select name="category" placeholder="category" onChange={handleChange} value={field.category}>
                            <option value="Food">Food</option>
                            <option value="Drink">Drink</option>
                            <option value="Accommodation">Accommodation</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Housing">Housing</option>
                            <option value="Rent">Rent</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                    </div>
                    <div className="control">
                        <label>Date</label>
                        <input name="date" type="date" placeholder="date" onChange={handleChange} value={field.date} />
                    </div>
                    <button type="submit" className="bt bt-block">Save Changes</button>
                </form>
            ) : (
                <div className="expense">
                    <h3>{expense.category}</h3>
                    <h4>{expense.item}</h4>
                    <sup>{expense.amount}</sup>
                    <b>{expense.date}</b>
                    <span className="faTrash"><FaTrash onClick={() => deletet(expense.id)} /></span><br />
                    <span className="faEdit"><FaEdit onClick={() => setEdit(!edit)}/></span>
                </div>
            )}
        </>
       
    
    )
}
const mDSTP = {
    deletet: deleteExpense,
    edite: editExpense,
    getAllExpense,
}
export default connect(null, mDSTP)(Expense)
