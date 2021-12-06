export const addExpense = (newExpense) => {
    return {
        type: "ADD_EXPENSE",
        payload: newExpense
    }
};
export const deleteExpense = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
};
export const editExpense = (id,edited) => {
    return {
        type: "EDIT",
        payload: { id, edited}
    }
};