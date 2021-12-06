import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseAction.js';

const AddForm = ({add}) => {

    const [inputField, setInputField] = useState({
        id:uuidv4(),
        item:"",
        amount:"",
        category:"",
        date : ""
    })
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputField((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        add(inputField);
        setInputField({
        item:"",
        amount:"",
        category:"",
        date : ""
        })
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let item = e.target.elements.article.value;
    //     let amount = e.target.elements.amount.value;
    //     let date = e.target.elements.date.value;
    //     let category = e.target.elements.category.value;

    //     if (item && amount) {
    //         let newExpense =
    //     {
            
    //         category,
    //         list: [
    //             {
    //                 item,
    //                 date,
    //                 AmountPaid: amount
    //             }
    //         ],
    //         id: uuidv4()
    //     }
    //     add(newExpense);
    //     }
        
       
    // }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
                <label>Item</label>
            <div className="control">
                <input type="text" name="item" placeholder="item"  onChange={handleChange} value={inputField.item}/>
            </div>
                <label>Amount Paid</label>
            <div className="control">
                <input type="text" name="amount" placeholder="Amount"  onChange={handleChange} value={inputField.amount}/>
            </div>
            <label for="items">Category:</label>
            <div className="control">
                <select name="category" placeholder="category"  onChange={handleChange} value={inputField.category}>
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
                <input name="date" type="date" placeholder="date" onChange={handleChange} value={inputField.date}/>
            </div>
            <button type="submit" className="bt bt-block">Save Expense</button>
        </form>
    )
}
const mDTP = {
    add : addExpense
}

export default connect(null, mDTP) (AddForm)
