export const addExpense = (newExpense) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('expenses').add(newExpense)
            .then((expense) => {
                
                console.log('added', expense)
            })
            .catch((err) => {
                console.log(err);
            })
    };
    // {
    //     type: "ADD_EXPENSE",
    //     payload: newExpense
    // }
};
export const deleteExpense = (id) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('expenses').doc(id)
                      .delete()
                      .then((item)=>{
                          console.log('deleted',item);
                      }).catch((err) => {
                          console.log(err);
                      })
    }
    // return {
    //     type: "DELETE",
    //     payload: id
    // }
};
export const editExpense = (id, edited) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore().collection('expenses').doc(id)
                      .update(edited)
                      .then((item)=>{
                          console.log('updated successfully',item);
                      }).catch((err) => {
                          console.log(err);
                      })
    }
    // return {
    //     type: "EDIT",
    //     payload: { id, edited}
    // }
};

export const getAllExpense = () => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('expenses')
            .onSnapshot((snap) => {
                let expenses = [];
                snap.forEach((doc) => {
                    expenses.push({...doc.data(), id:doc.id });
                })
                dispatch({
                    type: "ALL_EXPENSE",
                    payload: expenses
                        
                })
            },(error) => {
                console.log(error);
            });
        
                     
        
    }
}