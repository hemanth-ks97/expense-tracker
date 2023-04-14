import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
        console.log(event.target.value);
    }

    return(
        <form>
            <div className="new-expese__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onBlur={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onBlur={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2020-01-01" max="2023-12-31" onBlur={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;