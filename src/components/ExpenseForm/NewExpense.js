import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const[isAddingExpense, setIsAddingExpense] = useState(false);

    const setExpenseFormHandler = (enteredData) => {
        const data = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onSetNewData(data);
    }

    const addEntryHandler = () => {
        setIsAddingExpense(true);
    }

    const cancelClickHandler = () => {
        setIsAddingExpense(false);
    }

    return(
        <div className="new-expense">
            {!isAddingExpense && <button onClick={addEntryHandler}>Add Entry</button>}
            {isAddingExpense && <ExpenseForm onCancelClick={cancelClickHandler} onSetExpenseForm = {setExpenseFormHandler}/>}
        </div>
    )
}

export default NewExpense;