import React, { useState } from 'react'
import AddForm from '../AddForm.js'
import Expenses from '../Expenses.js'
import { connect } from "react-redux";
import Header from '../Header.js';
import Footer from '../Footer.js';

const Home = ({expenses}) => {
    const [showAdd, setShowAdd] = useState(false);
    return (
         <div className="contain"> 
             <Header onAdd={() => setShowAdd(!showAdd)} show={showAdd}/>
             {showAdd && <AddForm />}
            {expenses ? <Expenses /> : "no expense to show"}
            <Footer />
         </div>
    )
}
const mSTP = (state) => {
    console.log(state);
    return {
      expenses: state.expense.expenses
    }
  }

export default connect(mSTP) (Home)
