const date = new Date();
const initialState = {
    expenses: [
           {
             id:1,
             category: "food",
             item:"Mayonnaise",
             date:date.toLocaleDateString(),
             amount: `$${25}`,
           },
             {
                id:2,
                category: "food",
                item:"cheese",
                date:date.toLocaleDateString(),
                amount: `$${5}`,
             }
           ]
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "DELETE":
      const deletedItem = state.expenses.filter((expense) => {
        return expense.id !== action.payload 
      });
      return { ...state, expenses: deletedItem };
    case "EDIT":
      const editedExpense = state.expenses.map(( expense) => {
        return expense.id === action.payload.id ? action.payload.edited : expense
        })
      return { ...state, expenses: editedExpense }
    case "ALL_EXPENSE":
      return { expenses: action.payload };
          default:
        return state;
    }
}

export default expenseReducer;