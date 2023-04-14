import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const setExpenseFormHandler = (enteredData) => {
        const data = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onSetNewData(data);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSetExpenseForm = {setExpenseFormHandler}/>
        </div>
    )
}

export default NewExpense;