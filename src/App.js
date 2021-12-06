import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Expenses from './components/Expenses.js';
import { connect } from "react-redux";
import AddForm from './components/AddForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Route } from "react-router-dom";
import About from './components/About.js';

function App({ expenses }) {
  const [showAdd, setShowAdd] = useState(false);
  return (
    <BrowserRouter>
      <div className="contain">
        <Header onAdd={() => setShowAdd(!showAdd)} show={showAdd}/>
        
          <Route path="/" exact render={() => (
            <>
              {showAdd && <AddForm />}
              {expenses ? <Expenses /> : "no expense to show"}
              
            </>
          )} />
        <Route path="/about" component={About}/>
          <Footer />
         
      </div>
    </BrowserRouter>
  );
}

const mSTP = (state) => {
  return {
    expenses: state.expenses
  }
}


export default connect(mSTP)(App);
